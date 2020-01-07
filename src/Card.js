import React, { Component } from 'react'

class Card extends Component {

    render() {
        return(
            <div>
                <img src={this.props.cardFace} alt={this.props.getCardFace}></img>
            </div>
        )
    }

}

export default Card