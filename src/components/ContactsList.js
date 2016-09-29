require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import ListItem from './ListItem';

// let yeomanImage = require('../images/yeoman.png');

class ContactsList extends React.Component {
  render() {
    return (
      <div className="contacts-list">
        <ul>
          <ListItem users={this.state.users} />
        </ul>
      </div>
    );
  }
}

ContactsList.defaultProps = {
};
ContactsList.getInitialState = {
  users: [
    {
      name: 'ads',
      phone: '123'
    },
    {
      name: 'ads',
      phone: '123'
    }
  ]
};

export default ContactsList;
