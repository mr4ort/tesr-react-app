require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');
//import filterBar from './FilterBar'



class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Details page</h1>
      </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
