const SUITS = ["♠","♥", "♣", "♦"]
const VALUES = [ "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
]

export default Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
