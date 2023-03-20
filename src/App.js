import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    isSaveButtonDisabled: true,
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    data: [],
    hasTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const a = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10);
      const b = 210;
      const c = 90;
      const e = parseInt(cardAttr1, 10);
      console.log(typeof e);
      const f = parseInt(cardAttr2, 10);
      const g = parseInt(cardAttr3, 10);
      if (cardName !== '' && cardDescription !== '' && cardImage !== '' && a <= b
      && e <= c && e >= 0 && f <= c && f >= 0
      && g <= c && g >= 0) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  verifyTrunfo = () => {
    const { data } = this.state;
    const a = data.some((e) => e.cardTrunfo);
    this.setState({
      hasTrunfo: a,
    });
  };

  deleteItem = (i) => {
    const { data } = this.state;
    const a = data.filter((e) => e !== i);
    this.setState({
      data: [...a],
    }, () => this.verifyTrunfo());
  };

  onSaveButtonClick = (info) => {
    this.setState((prev) => ({
      data: [...prev.data, info],
    }), () => this.verifyTrunfo());

    this.setState({
      isSaveButtonDisabled: true,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

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
      data,
      hasTrunfo,
    } = this.state;
    return (
      <div id="App">
        <h1>Tryunfo</h1>
        <div id="Items">
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
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
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
          {
            data.map((item) => (
              <div
                key={ item.cardName }
              >
                <Card
                  cardName={ item.cardName }
                  cardDescription={ item.cardDescription }
                  cardAttr1={ item.cardAttr1 }
                  cardAttr2={ item.cardAttr2 }
                  cardAttr3={ item.cardAttr3 }
                  cardImage={ item.cardImage }
                  cardRare={ item.cardRare }
                  cardTrunfo={ item.cardTrunfo }
                />

                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.deleteItem(item) }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
