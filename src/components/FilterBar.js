require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class AppComponent extends React.Component {
  render() {
    return (
      <div className='filters-bar'>
        <select  id="">
          <option value="">1</option>
          <option value="">2</option>
        </select>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
