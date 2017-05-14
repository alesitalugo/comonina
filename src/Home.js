import React, { Component } from 'react';
import HomePresentation from './HomePresentation';

import Sectores from './Sectores';
import Quienes from './Quienes';
import Postulate from './Postulate';
import Networking from './Networking';
class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <HomePresentation />
        <Sectores />
        <Quienes />
        <Postulate />
        <Networking />
      </div>

    );
  }
}

export default Home;
