import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <ul className="links">            
        <li className="links-item link-styled"><a className="links-link">Registrate</a></li>
        <li className="links-item link-styled"><a className="links-link">Inicia Sesión</a></li>                
      </ul>
    );
  }
}

export default Home;
