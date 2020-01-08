import React, { Component } from "react";
import Card from "./Card";
import Axios from "axios";
import './Deck.css'

const API = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: "",
      card: "",
      newCardEnabled: false,
      drawn: [{ id: "", image: "", name: "", remaining: "" }]
    };
    this.getCard = this.getCard.bind(this);
    this.handleNewDeck = this.handleNewDeck.bind(this);
  }

  async componentDidMount() {
    // Axios http client - a way of interfacing with api's
    let response = await Axios.get(API);
    let deckID = response.data.deck_id;
    let drawResponse = await Axios.get(
      `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
    );
    let cardFace = drawResponse.data.cards[0].image;
    this.setState({ deckID: deckID, card: cardFace });
  }

  async getCard() {
    let id = this.state.deckID;

    try {
      let drawResponse = await Axios.get(
        `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
      );
      let remainingCard = drawResponse.data.remaining;
      console.log(1, drawResponse.data);
      let card = drawResponse.data.cards[0];
      console.log(2, card);

      if (drawResponse.data.success === false) {
        throw new Error("no cards left");
      }
      let cardFace = drawResponse.data.cards[0].image;

      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.id,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
            remaining: drawResponse.data.remaining
          }
        ]
      }));

      if (remainingCard >= 0) {
        this.setState({ card: cardFace, counter: remainingCard });
      }
      if (remainingCard === 0) {
        this.setState({ newCardEnabled: true });
      }
    } catch (err) {
      alert(err);
    }
  }

  handleNewDeck() {
    window.location.reload();
  }

  //   getCardFace(card) {
  //     return altImage(card);
  //   }

  render() {
    const cards = this.state.drawn.map(c => (
      <Card
        key={c.id}
        card={c.image}
        name={c.name}
        cardsRemaining={c.remaining}
      />
    ));

    return (
      <div className="Deck-Container">
        <h1 className="Deck-title">Deck Of Cards Game</h1>
        <button onClick={this.getCard} disabled={this.state.newCardEnabled}>
          New Card
        </button>
          <button onClick={this.handleNewDeck}>New Deck</button>
        <div className="Deck-Card">
          {cards}
        </div>
      </div>
    );
  }
}

export default Deck;

// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1
