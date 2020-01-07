import React, { Component } from "react";
import Card from "./Card";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { card: "" };
  }

  render() {
    return (
      <div>
        <h1>Deck Of Cards Game</h1>
        <button>New Card</button>
        <div>
          <Card />
        </div>
      </div>
    );
  }
}

export default Deck;
