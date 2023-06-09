import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    const verifyHasTrunfo = () => {
      const a = hasTrunfo;
      const b = (
        <p
          name="cardTrunfo"
          data-testid="trunfo-input"
          id="trunfo"
        >
          Você já tem um Super Trunfo em seu baralho
        </p>
      );
      const c = (
        <label htmlFor="trunfo">
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      );
      if (a === true) {
        return b;
      }
      return c;
    };
    return (
      <div id="form">
        <form>
          <label htmlFor="name">
            <input
              name="cardName"
              type="text"
              data-testid="name-input"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="textarea">
            <textarea
              name="cardDescription"
              data-testid="description-input"
              id="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            <input
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2">
            <input
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3">
            <input
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="Image">
            <input
              name="cardImage"
              type="text"
              data-testid="image-input"
              id="Image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare">
            <select
              name="cardRare"
              data-testid="rare-input"
              id="rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {verifyHasTrunfo()}

          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            }) }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
