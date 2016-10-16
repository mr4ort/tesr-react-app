require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

//let data = {
//  class: 'my-class'
//};

class AppComponent extends React.Component {
  render() {
    return (
      <header className="header">
        <strong>logo</strong>
      </header>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
