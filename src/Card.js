import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props)
        let angle = Math.random() * 90 - 45
        let xPosition = Math.random() * 40 - 20
        let yPosition = Math.random() * 40 - 20
        this._transform = `translate(${xPosition}px, ${yPosition}px) rotate(${angle}deg)`
    }

  render() {
    return (
      <div className="Card">
          <img style={{transform: this._transform}} src={this.props.card} alt={this.props.name}></img>
      </div>
    );
  }
}

export default Card;


