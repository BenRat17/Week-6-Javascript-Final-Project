//Week 6 Javascript Final Project - Automated WAR Card Game//
// Benjamin Ratliff //

//making a player class to hold an array of cards that each player will have in 'hand'
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
        if (typeof this.name != 'string'){
            throw new Error('Name must only contain letters')
        }
    }
}

//making a card class to use a face value of a card and a suit to eventually populate an array with every card combination to make a whole deck.
class Card {
     static suit = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
     static face = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
     //had to look up how to make a constant variable inside a class since it wouldn't let me at first, 'Static' is the keyword for that.//
     constructor(face, suit){
        if (!Card.face.includes(value)) {
            throw new Error('Not a valid card face type!');
        }
        if (!Card.suit.includes(suit)) {
            throw new Error('Not a valid card suit type!');
        }

        this.suit = suit;
        this.face = face;
    }
    //function to show the card when played.
     showCard(){
        return this.face + ' of ' + this.suit;
    }
}

//making a deck class to actually construct the deck each game.
class Deck {
    constructor() {
        this.cards = [];
        let iterator = 0;
        for (let face of Card.face) {
         for (let suit of Card.suit) {
            this.cards[iterator++] = new Card(face, suit);
            }      
        }
                }
 //a function to shuffle the deck each game.
        shuffleDeck() {
            for (let i = 0; i < this.cards.length; i++) {
                let j = Math.floor(Math.random() * this.cards.length);
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
            }
         }
 }
// making variables to init players, and functions to give them cards. //
let player1 = new Player('You');
let player2 = new Player('CPU');
let deck = new Deck();
deck.shuffleDeck();
function dealHand(deck, player1, player2){
    for ( let i = 0; i < deck.cards.length; i = i +2 ) {
        player1.hand.push(deck.cards[i]);
        player2.hand.push (deck.cards[i + 1]);
}
}

// making a function to start the game and iterate through the turns to display a winner.//

function gameStart(player1, player2){
    let turns = player1.hand.length;
    for (let i = 0; i < turns; i++){
        let cardPlayed1 = player1.hand.pop();
        let cardPlayed2 = player2.hand.pop();

        let displayTurns = `${player1.name} play ${cardPlayed1.showCard()} and ${player2.name}
        plays ${cardPlayed2.showCard()}.`;

        let cardPlayed1Value = Card.face.indexOf(cardPlayed1.face);
        let cardPlayed2Value = Card.face.indexOf(cardPlayed2.face);

        if (cardPlayed1Value > cardPlayed2Value) {
            console.log(displayTurns + `${player1.name} win this round!`);
            player1.score++;
        }else if (cardPlayed1Value < cardPlayed2Value) {
            console.log(displayTurns + `${player2.name} wins this round!`);
            player2.score++;
    }else {
        console.log(displayTurns + 'No one wins, no score!');
        }
    }
}

// making a function to show the end of game and who won based on high score.//

function gameEnd(player1, player2) {
    if (player1.score > player2.score){
        console.log (`${player1.name} won the match with ${player1.score} points! \n
        ${player2.name} had a score of ${player2.score} points!`);
    }else if (player1.score < player2.score){
        console.log (`${player2.name} won the match with ${player2.score} points! \n
        ${player1.name} had a score of ${player1.score} points!`);
    }else {
        console.log('Nobody wins! Better luck next time!');
    }
}

dealHand(deck, player1, player2);
gameStart(player1, player2);
gameEnd(player1, player2);
