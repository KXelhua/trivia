import React, { Component } from 'react';
import '../css/App.css';
 import Question from './Question';
 import {buildFirebase, getRandomQuestion} from '../clients/firebase.js';
 import Answer from './Answer';

class App extends Component {
  constructor (props) {
    super (props);
    this.state={
      questionInfo: null,
      choices: [
          "48",
          "13",
          "52",
          "50"
      ],
      correct_choice_index: 3,
      question_text: "???",
  };
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then((data) => this.setState({questionInfo: getRandomQuestion(data.val())}));
    // console.log(this.state.questionInfo);
  }

  render() {
    if (this.state.questionInfo === null) {
      return(<div></div>);
    }

    console.log(this.state.questionInfo.choices[0]);
    return (
      <div className="app">
        <Question questiontext={this.state.questionInfo.question_text} questionInfo={this.state.questionInfo}/>
      </div>
    );
  }
}

export default App;
