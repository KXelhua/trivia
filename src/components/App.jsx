import React, { Component } from 'react';
import '../css/App.css';
 import Question from './Question';
 import {buildFirebase} from '../clients/firebase.js';

class App extends Component {
  constructor (props) {
    super (props);
    this.state={
        choices: [
            "48",
            "13",
            "52",
            "50"
        ],
        correct_choice_index: 3,
        question_text: "How many states are in the United States?",
    };
  }

  render() {
    return (
      <div className="app">
        <Question questiontext ="How many states are in the United States?"/>
      </div>
    );
  }
}

export default App;
