import React, { Component } from 'react';
import axios from 'axios';

import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Insert from './insert';
import Nav from './Nav';
import Home from './home';


class App extends Component{


render(){
  return (
    <div className="App">
      <Router>
		<Nav />
    <Switch>
    <Route path="/" exact component={Home}>
            <Home />
        </Route>

        <Route path="/insert" component={Insert}>
        <Insert />
      </Route>
      </Switch>
		</Router>
		
    </div>
  );
  }
}

export default App;
