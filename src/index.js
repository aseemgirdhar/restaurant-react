import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./login/login";
import Signup from "./signup/signup";
import Home from "./home/home";
import ForgetPassword from "./forget-password/forget-password";
import Single from "./single-restaurent/single";
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path='/' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/dashboard' component={Home} />
              <Route exact path='/forget-password' component={ForgetPassword} />
              <Route exact path={`/single/:id`} component={Single} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

