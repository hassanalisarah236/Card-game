const SUITS = ["♠","♥", "♣", "♦"]
const VALUES = [ "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  shuffle() {
    //Gets a perfectly random shuffle every time
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      //Generate a random index before the current card we're on
      //floor function to make sure we get an integer
      const newIndex = Math.floor(Math.random() * (i + 1))}
      //flip the values at the new index with the current index
      //oldValue acts as an intermediary to hold one of the values while we swap
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }
}

function freshDeck(){
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}