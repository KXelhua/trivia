import React, { Component } from 'react';
import '../css/App.css';
 import Question from './Question';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Question questiontext ="How many states are in the United States?"/>
        
      </div>
    );
  }
}

export default App;
