import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleNewDeck = this.handleNewDeck.bind(this);
  }

  handleNewDeck() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="Card">
          <img src={this.props.cardFace} alt={this.props.getCardFace} ></img>
        </div>
        <p>Cards remaining: {this.props.cardsRemaining} </p>
        <button onClick={this.handleNewDeck}>New Deck</button>
      </div>
    );
  }
}

export default Card;
