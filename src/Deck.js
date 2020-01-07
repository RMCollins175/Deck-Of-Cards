import React, { Component } from "react";
import Card from "./Card";
import Axios from "axios";
import './helpers'
import { altImage } from "./helpers";

const API = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deckID: "", card: "", newCardEnabled: false, counter: 51};
    this.getCard = this.getCard.bind(this)
    this.getCardFace = this.getCardFace.bind(this)
  }

async componentDidMount(){
    // Axios http client - a way of interfacing with api's
    let response = await Axios.get(API)
    let deckID = response.data.deck_id
    let drawResponse = await Axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    let cardFace = drawResponse.data.cards[0].image
    this.setState({deckID: deckID, card: cardFace})
}

async getCard() {
    let id = this.state.deckID
    let drawResponse = await Axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    let remainingCard = drawResponse.data.remaining
    
    if(remainingCard >= 0) {
        let cardFace = drawResponse.data.cards[0].image
        console.log(remainingCard)
        this.setState({card: cardFace, counter: remainingCard})
    } if(remainingCard === 0) {
        this.setState({newCardEnabled: true})
    }
}

getCardFace(card) {
    return altImage(card)
}

  render() {
    return (
      <div>
        <h1>Deck Of Cards Game</h1>
        <button onClick={this.getCard} disabled={this.state.newCardEnabled}>New Card</button>
        <div>
          <Card 
          cardFace={this.state.card}
          getCardFace={this.getCardFace(this.state.card)}
          cardsRemaining={this.state.counter}
          />
        </div>
      </div>
    );
  }
}

export default Deck;


// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1