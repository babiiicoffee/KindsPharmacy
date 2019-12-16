import React, { Component } from 'react';
import './App.css';
import Register from '../src/components/Register'
import Login from '../src/components/Login'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' render={() =>
              <Login></Login>}>
            </Route>
            <Route exact path='/register' render={() =>
              <Register></Register>}>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

