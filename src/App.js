import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisable: true,
  };

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    const a = this.verifyIsButton;
    if (a === false) {
      this.setState({
        isSaveButtonDisable: false,
      });
    }
  }

  verifyIsButton() {
    let a = true;
    const {
      cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    if (
      cardName !== '' && cardDescription !== '' && cardImage !== ''
    ) {
      a = false;
    }
    if (
      cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0
      || cardAttr1 === 0 || cardAttr2 === 0 || cardAttr3 === 0
    ) {
      a = true;
    }
    return a;
  }

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
      isSaveButtonDisable,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisable={ isSaveButtonDisable }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
