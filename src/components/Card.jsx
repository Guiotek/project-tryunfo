import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const verify = (param) => {
      if (param === true) {
        return <h2 data-testid="trunfo-card">Super Trunfo</h2>;
      }
    };

    return (
      <div id="Card">
        <div id="items">
          <h1 data-testid="name-card">{cardName}</h1>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{cardDescription}</p>
          <h3 data-testid="attr1-card">{cardAttr1}</h3>
          <h3 data-testid="attr2-card">{cardAttr2}</h3>
          <h3 data-testid="attr3-card">{cardAttr3}</h3>
          <h3 data-testid="rare-card">{cardRare}</h3>
          {verify(cardTrunfo)}
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
