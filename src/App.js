import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// components
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/sign-up' component={SignUp} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
