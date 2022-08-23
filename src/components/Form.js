import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            <input name="none" type="text" data-testid="name-input" id="name" />
          </label>
          <label htmlFor="textarea">
            <textarea data-testid="description-input" id="textarea" />
          </label>
          <label htmlFor="attr1">
            <input name="attr1" type="number" data-testid="attr1-input" id="attr1" />
          </label>
          <label htmlFor="attr2">
            <input name="attr2" type="number" data-testid="attr2-input" id="attr2" />
          </label>
          <label htmlFor="attr3">
            <input name="attr3" type="number" data-testid="attr3-input" id="attr3" />
          </label>
          <label htmlFor="Image">
            <input name="Image" type="text" data-testid="image-input" id="Image" />
          </label>
          <label htmlFor="rare">
            <select name="rare" data-testid="rare-input" id="rare">
              <option value="Normal" selected>Normal</option>
              <option value="Raro">Raro</option>
              <option value="Muito Raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            <input name="trunfo" type="checkbox" data-testid="trunfo-input" id="trunfo" />
          </label>
          <button type="button" data-testid="save-button"> Salvar </button>
        </form>
      </div>
    );
  }
}

export default Form;
