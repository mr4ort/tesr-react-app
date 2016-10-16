import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//import App from './components/Main';
//import ContactsList from './components/ContactsList';
//import Header from './components/Header';
import News from './components/News';
import Details from './components/Details';




// Render the main component into the dom

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Details}>
      <Route path='/details' component={Details}>
      </Route>
    </Route>

  </Router>,
  document.getElementById('app'));
