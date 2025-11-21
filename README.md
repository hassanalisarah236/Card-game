# Pastel Themed War Card Game 🎴🌸

A fun, cutesy **card game** inspired by the classic "War" game!  
This repository contains **two versions** of the game:

1. **Browser Version** – Play with a visual, pastel-themed UI using HTML, CSS, and JavaScript.
2. **CLI Version** – Play in the terminal with colored ASCII cards for a fun, cute experience.

## How to play
- A standard 52-card deck is created.
- Deck is shuffled and split evenly between player and computer.
- Players flip the top card from their decks.
- Higher card wins the round; winner gets both cards added to the bottom of their deck.
- In case of a tie, each player keeps their card.
- Game continues until one deck is empty.

## Features

### Browser Version
- Colorful pastel cards and decks
- Interactive card flipping by clicking
- Tracks player and computer decks
- Displays round results and game winner
- Cute animations and soft UI

### CLI Version
- Play entirely in the terminal
- Color-coded suits: red for hearts/diamonds, gray for spades/clubs
- Cute ASCII card art
- Fun emojis for round results 🎀💔✨
- Keeps 52 cards in play; proper handling of ties
- Requires Node.js and `prompt-sync` + `chalk` packages


## Getting Started

### Browser Version
1. Open `index.html` in your favorite browser.
2. Click anywhere on the screen to flip cards.
3. Follow the on-screen prompts to play rounds until one player wins.

### CLI Version
1. Make sure Node.js is installed
2. Install dependencies:

```bash
npm install
npm install prompt-sync chalk@4
Run the game:

bash
Copy code
node cli.js
Press Enter to flip cards each round.
