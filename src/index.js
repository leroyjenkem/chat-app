import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import firebase, {auth, provider} from './firebase.js';
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
        <div className="app">
          <nav className="main-nav">
            {!this.state.user &&
              <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            }
            {this.state.user &&
              <a href="#!" onClick={this.logOutUser}>Log out</a>
            }
          </nav>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRouter />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
