import React, { Component } from 'react';

import HomeSearch from './HomeSearch';
import LoginButtons from './LoginButtons';


class Networking extends Component {
  render() {
    return (
    	<div>
      <div className="networking-container">
      	<div className="networking-container--item contacto-item">
      		<div className="networking-container--body">
      			<h2 className="container-title">Contacto</h2>
          		<a className="networking-link">contacto@lookformarie</a>
          	</div>
      	</div>
      	<div className="networking-container--item net-item">
      		<div className="networking-container--body">
      			<h2 className="container-title">Síguenos</h2>
      			<div className="networking-links">
          			<a className="networking-link facebook container-sectors--icon"></a>
          			<a className="networking-link twitter container-sectors--icon"></a>          		
          		</div>
          	</div>
      	</div>
      	
      </div>
      <div className="footer">
      	<div className="footer-container">
      		<p className="footer-text">® Janis Derechos reservados</p>
      		<a className="footer-link">Aviso de privacidad</a>
      		</div>
      	</div>
      	</div>
    );
  }
}

export default Networking;
