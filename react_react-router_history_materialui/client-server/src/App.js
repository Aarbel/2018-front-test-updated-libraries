import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import { Home } from './home';
import { Project } from './project';

import { BackButton } from './components/back-button';
import AppBar from 'material-ui/AppBar';

class App extends Component {

  render() {
    
    return (
        <div className="App">
          <AppBar title="Projects Dashboard" 
                  showMenuIconButton={false}/>

          <Route exact path="/:id" 
                 component={BackButton} />

          <Switch>
              <Route exact 
                    path='/' 
                    component={Home} />
              <Route exact 
                    path='/:id' 
                    component={Project} />
          </Switch>
        </div>
    )
  }
}

export default App;

// Question to Nathan : so how we manage different components with Routes ?
