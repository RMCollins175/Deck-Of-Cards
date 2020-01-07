import React, { Component } from "react";
import Card from "./Card";
import Axios from "axios";
import './helpers'
import { altImage } from "./helpers";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deckID: "", card: ""};
    this.addCard = this.addCard.bind(this)
    this.getCardFace = this.getCardFace.bind(this)
  }

async componentDidMount(){
    let response = await Axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    console.log(response.data)
    let deckID = response.data.deck_id
    console.log(deckID)
    let drawResponse = await Axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    let cardFace = drawResponse.data.cards[0].image
    console.group(cardFace)
    this.setState({deckID: deckID, card: cardFace})
    console.log(this.state.card)
}

addCard() {
    let drawResponse = Axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`)
    console.log(drawResponse)
    // let cardFace = drawResponse.data.cards[0].image
    // this.setState({card: cardFace})
}

getCardFace(card) {
    return altImage(card)
}

  render() {
    return (
      <div>
        <h1>Deck Of Cards Game</h1>
        <button onClick={this.addCard}>New Card</button>
        <div>
          <Card 
          cardFace={this.state.card}
          getCardFace={this.getCardFace(this.state.card)}
          />
        </div>
      </div>
    );
  }
}

export default Deck;


// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1