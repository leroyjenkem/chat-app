import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="auth-container">
        <h1>Login</h1>
        <h1>Login to access your account</h1>
        {error && <p className="error-message">{error.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email address</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}>
            </input>
          <label htmlFor="password">Choose a password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}>
            </input>
          <button className="submit">Login</button>
          <p>Don't have an account? <Link className="login-btn" to="/register">Register here</Link></p>
        </form>
      </div>
    );
  }
}

export default Login;
