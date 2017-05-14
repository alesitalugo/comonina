import React, { Component } from 'react';
import HomeSearch from './HomeSearch';
import profile from './img/profile.jpg';
import Networking from './Networking';


class ResultsSidebar extends Component {
  render() {
    return (
    	<div className='results-sidebar'>
        <img src={profile} className="App-logo" alt="logo" />     
      <Networking />                             
      </div>
    );
  }
}

export default ResultsSidebar;
