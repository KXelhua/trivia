import React, { Component } from 'react';
import '../css/App.css';


class Answer extends Component {

  render() {
    return (
      <div className="answer">
        <button> {this.props.answertext} </button>
        
      </div>
    );
  }
}

export default Answer;