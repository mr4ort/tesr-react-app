import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import ContactsList from './components/ContactsList';


// Render the main component into the dom
let users = [];

ReactDOM.render(
  <ContactsList />,
  document.getElementById('app'));
