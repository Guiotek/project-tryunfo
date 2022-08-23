import React, { Component } from 'react';

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

    return (
      <div>
        <h1>{cardName}</h1>
        <img src={ cardImage } alt="imagem" />
        <p>{cardDescription}</p>
        <h3>{cardAttr1}</h3>
        <h3>{cardAttr2}</h3>
        <h3>{cardAttr3}</h3>
        <h3>{cardRare}</h3>
        <h2>{cardTrunfo}</h2>
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
