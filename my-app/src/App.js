import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      item: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      item: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    window.location.assign('#/toDo')
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input onChange={ this.handleInput } />
        <button onClick={ this.handleClick }>Add new To-Do</button>
      </div>
    );
  }
}

export default App;
