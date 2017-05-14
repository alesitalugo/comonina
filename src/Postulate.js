import React, { Component } from 'react';

import HomeSearch from './HomeSearch';
import LoginButtons from './LoginButtons';


class Postulate extends Component {
  render() {
    return (
      <div className="postulate-container">
        <div className="container-body">
          <h2 className="container-title">Postúlate</h2>

          <a className="postulate-link">Subir CV</a>
        </div>
      </div>

    );
  }
}

export default Postulate;
