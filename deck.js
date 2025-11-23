const SUITS = ["♠", "♥", "♣", "♦"]
const VALUES = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }

  get color() {
    return this.suit === "♠" || this.suit === "♣" ? "black" : "red"
  }

  getName() {
    return `${this.value} ${this.suit}`
  }

  getHTML() {
    if (typeof document === "undefined") return null; // not used in CLI
    const cardDiv = document.createElement("div")
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
  }
}

class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }
}

// Create a fresh deck
function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => new Card(suit, value))
  })
}

module.exports = { Deck, Card }
