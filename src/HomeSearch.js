import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="searchbox">
          <input type="text" className="searchbox-input"/>
          <input type="text" className="searchbox-input"/>
          <button className="searchbox-btn icon-search container-sectors--icon"></button>
      </div>
    );
  }
}

export default Home;
