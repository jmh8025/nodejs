import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
 
  render() {
    return (
      <div>
        <h1>안녕
        </h1>
        <MyComponent name="React" age={3}/>
      </div>
    );
  }
}

export default App;
