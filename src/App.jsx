import React, { Component } from 'react';
import './App.css';

import TextInput from './components/text-input';
import Text from './components/text';

import { alphaNumeric } from './utils/validators';
import { recurringCharacterCounter } from './services/recurring-character-counter';

class App extends Component {

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      recurringCount: undefined
    }
  }

  onInputChange(value) {
    recurringCharacterCounter(value).then((recurringCount) => this.setState({...this.state, recurringCount}))
  }

  render() {
    const { recurringCount } = this.state;
    return (
      <div className="App">
        <Text element='h1' className="App-title">Recurring Character Counter</Text>
        <TextInput textBoxStyle="word-input"
          id="word"
          validator={alphaNumeric}
          placeHolder="Please enter some text"
          onChange={this.onInputChange} />
        {
          recurringCount !== undefined &&
            <Text id='recurring-char-info' element='p'>{`Recurring character count is ${recurringCount}`}</Text>
        }
      </div>
    );
  }
}

export default App;
