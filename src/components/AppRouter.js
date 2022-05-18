import React, { Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import firebase, {auth} from '../firebase.js';
import App from '../App';
import SimplePlane from "./SimplePlane";

import Login from './Login';
import Register from './Register';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null}
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({user});
      }
    })
  }
  logOutUser = () => {
    firebase.auth().signOut()
    .then(window.location = "/");
  }
  render() {
    return (
      <Router>
        <div className="App">

          <SimplePlane />
          {this.state.user &&
            <a href="#!" onClick={this.logOutUser}>
              <button id="logout">Log out</button>
            </a>
          }
          <Switch>
            <Route path="/" exact render={() => <App user={this.state.user}/>} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
