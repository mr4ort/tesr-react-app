require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');




class ListItem extends React.Component {



  render() {
    var sd = '';
    return (
      <li className="list-item">
        {this.props.users.map(function (el) {
          return(
          <span className="item-name">{el.name}</span>);
        })}

      </li>
    );
  }
}

ListItem.defaultProps = {
};

export default ListItem;
