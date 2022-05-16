import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';
import Chatbox from './components/Chatbox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.message !== ''){
      const chatRef = firebase.database().ref('general');
      const chat = {
        message: this.state.message,
        user: this.props.user.displayName,
        timestamp: new Date().getTime()
      }
      chatRef.push(chat);
      this.setState({message: ''});
    }
  };

  render() {
    return (
      <div className="contentWrap">
        <h1>Chat App</h1>
        {this.props.user && (
          <div className="allow-chat">
            <Chatbox items={this.state.items} />
            <form className="message-form" onSubmit={this.onSubmit}>
            <input
              type="text"
              name="message"
              id="message"
              value={this.state.message}
              placeholder="Enter a message..."
              onChange={this.onChange} />
            <button id="send">Send</button>
            </form>
          </div>
        )}
        {!this.props.user && (
          <div className="disallow-chat">
            <p>
              <Link to="/login"><strong>Login</strong></Link> or <Link to="/register"><strong>Register</strong></Link> to start chatting!
            </p>
          </div>
        )}
      </div>
    );
  }
}
export default App;
