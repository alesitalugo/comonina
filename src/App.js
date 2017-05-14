import React, { Component } from 'react';
import logo from './img/logo.png';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header-container">
            <div className="header-container--logo">
              <img src={logo} className="App-logo" alt="logo" />            
            </div>
            <div className="header-container--content">
              <ul className="header-links">
                <li className="header-links-item"><a className="header-links-link">Trabajos</a></li>
                <li className="header-links-item"><a className="header-links-link">Postúlate</a></li>                
                <li className="header-links-item link-styled"><a className="header-links-link">Registrate</a></li>
                <li className="header-links-item link-styled"><a className="header-links-link">Inicia Sesión</a></li>                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
