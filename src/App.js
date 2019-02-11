import React, { Component } from 'react';
import './App.css';
import HW6 from './HW6';
import HW7 from './HW7';

class App extends Component {
  render() {

    const content = <p>Hello Modal</p>;
    return (
      <div className="App">
      <HW7
      buttonText="Open"
      cancelButtonText="Go Back"
      content={content}
      width={400} />

      </div>
    );
  }
}

export default App;
