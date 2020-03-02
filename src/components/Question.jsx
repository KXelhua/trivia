import React, { Component } from 'react';
// import components
import Answer from './Answer';

class Question extends Component {
  
  render() {
    return (
      <div>

        <h1> {this.props.questiontext} </h1>
        <div> 
          <Answer answertext= {this.props.questionInfo.choices[0]} />
          <Answer answertext= {this.props.questionInfo.choices[1]} />
          <Answer answertext= {this.props.questionInfo.choices[2]} />
          <Answer answertext= {this.props.questionInfo.choices[3]} />
        </div>
      </div>
    );
  }
}

export default Question;