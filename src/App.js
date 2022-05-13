import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Chatbox from './components/Chatbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Chat App</h1>
        <Chatbox items={this.state.items} />
        <form className="message-form" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
export default App;
