const prompt = require("prompt-sync")();
const chalk = require("chalk");

const SUITS = ["♠", "♥", "♣", "♦"];
const VALUES = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const CARD_VALUE_MAP = {
  "2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,
  "J":11,"Q":12,"K":13,"A":14
};

const DECOR = { "♥": "♡", "♦": "♢", "♣": "☘", "♠": "★" };

class Card {
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
    this.rank = CARD_VALUE_MAP[value];
  }

  getASCII(){
    const suitSymbol = DECOR[this.suit] || this.suit;
    const color = (this.suit==="♥"||this.suit==="♦") ? chalk.red : chalk.gray;
    const val = this.value.padEnd(2, " "); // pad for alignment
    const cardLines = [
      "┌─────────┐",
      `│${val}       │`,
      "│         │",
      `│    ${suitSymbol}    │`,
      "│         │",
      `│       ${val}│`,
      "└─────────┘"
    ];
    return cardLines.map(line=>color(line)).join("\n");
  }

  getName(){ return `${this.value} ${this.suit}`; }
}

class Deck {
  constructor(cards = freshDeck()){ this.cards = cards; }
  get numberOfCards(){ return this.cards.length; }
  shuffle(){
    for(let i=this.numberOfCards-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  pop(){ return this.cards.shift(); }
  push(...cards){ this.cards.push(...cards); }
}

function freshDeck(){ return SUITS.flatMap(suit=>VALUES.map(val=>new Card(suit,val))); }

// --- Game logic ---
function startGameCLI(){
  const deck = new Deck();
  deck.shuffle();

  const mid = Math.floor(deck.numberOfCards / 2);
  const playerDeck = new Deck(deck.cards.slice(0,mid));
  const computerDeck = new Deck(deck.cards.slice(mid));

  console.log(chalk.cyanBright("🌸 Welcome to War Card Game 🌸"));
  console.log(`You: ${playerDeck.numberOfCards} cards | Computer: ${computerDeck.numberOfCards} cards\n`);

  while(playerDeck.numberOfCards > 0 && computerDeck.numberOfCards > 0){
    prompt(chalk.yellow("Press Enter to flip cards..."));

    const playerCard = playerDeck.pop();
    const computerCard = computerDeck.pop();

    // Display cute ASCII cards side by side
    const playerLines = playerCard.getASCII().split("\n");
    const computerLines = computerCard.getASCII().split("\n");
    console.log();
    for(let i=0;i<playerLines.length;i++){
      console.log(playerLines[i]+"    "+computerLines[i]);
    }
    console.log();

    if(playerCard.rank > computerCard.rank){
      console.log(chalk.greenBright("🎀 You win this round! 🎀"));
      playerDeck.push(playerCard, computerCard);
    } else if(computerCard.rank > playerCard.rank){
      console.log(chalk.redBright("💔 Computer wins this round! 💔"));
      computerDeck.push(playerCard, computerCard);
    } else {
      console.log(chalk.yellowBright("✨ It's a draw! ✨"));
      playerDeck.push(playerCard);
      computerDeck.push(computerCard);
    }

    console.log(`\nDecks -> You: ${playerDeck.numberOfCards} | Computer: ${computerDeck.numberOfCards}\n`);
  }

  console.log(chalk.magentaBright("🌸=== Game Over ===🌸"));
  if(playerDeck.numberOfCards===0) console.log(chalk.redBright("💔 You Lose! 💔"));
  else console.log(chalk.greenBright("🎀 You Win! 🎀"));
}

startGameCLI();
