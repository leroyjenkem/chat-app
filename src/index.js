import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import Register from './components/Register';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
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
