import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    return (
      <div>

        <h1> {this.props.questiontext} </h1>
        <div>
            <p>Code Next</p>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
    );
  }
}

export default Question;