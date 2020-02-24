import React, { Component } from 'react';
// import components
import Answer from './Answer';

class Question extends Component {
  
  render() {
    return (
      <div>

        <h1> {this.props.questiontext} </h1>
        <div>
        <Answer answertext= "48" />
        <Answer answertext= "13" />
        <Answer answertext= "52" />
        <Answer answertext= "50" />
        </div>
      </div>
    );
  }
}

export default Question;