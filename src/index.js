import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import './styles.css';
import firebase, {auth} from './firebase.js';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';

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
        <>
          {this.state.user &&
            <a href="#!" onClick={this.logOutUser}><button id="logout">Log out</button></a>
          }
          <Switch>
            <Route path="/" exact render={() => <App user={this.state.user}/>} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default AppRouter;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRouter />
);
