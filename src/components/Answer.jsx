import React, { Component } from 'react';
import '../css/App.css';


class Answer extends Component {

  render() {
    return (
      <div className="answer">
        <p> {this.props.answertext} </p>
        
      </div>
    );
  }
}

export default Answer;