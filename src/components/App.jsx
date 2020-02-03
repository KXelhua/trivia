import React, { Component } from 'react';
import '../css/App.css';
 import Question from './Question';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Question questiontext ='What was Code Nations previous name?'/>
        
      </div>
    );
  }
}

export default App;
