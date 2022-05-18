import React, { Component } from 'react';
import firebase from '../firebase.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({error});
      });
  };

  render() {
    const {email, password, error} = this.state;
    return (
      <div className="login">
        {error && <p className="error-message">{error.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="chk" aria-hidden="true" id="loginh1">Login</label>
            <input
              type="text"
              name="email"
              id="current-email"
              className="email-input"
              placeholder="Email"
              autoComplete="current-email"
              required=""
              value={email}
              onChange={this.handleChange}>
            </input>
            <input
              type="password"
              name="password"
              id="current-password"
              placeholder="Password"
              required=""
              autoComplete="current-password"
              value={password}
              onChange={this.handleChange}>
            </input>
          <button className="submit">Login</button>
        </form>
        </div>
    );
  }
}

export default Login;
