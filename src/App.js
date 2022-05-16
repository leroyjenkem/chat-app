import React, { Component } from 'react';
import firebase from './firebase';
import Chatbox from './components/Chatbox';
import Login from './components/Login';
import Register from './components/Register';

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
      <>
        {this.props.user && (
          <div className="contentWrap">
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
          <div className="contentWrap">
          <div className="authwrap">
              <input type="checkbox" id="chk" aria-hidden="true"></input>
              <Register />
              <Login />
          </div></div>
        )}
      </>
    );
  }
}
export default App;
