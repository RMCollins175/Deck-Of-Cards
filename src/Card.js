import React, { Component } from 'react'

class Card extends Component {

    render() {
        return(
            <div>
                <img src={this.props.cardFace} alt=""></img>
            </div>
        )
    }

}

export default Card