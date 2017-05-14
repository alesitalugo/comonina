import React, { Component } from 'react';

class Sectores extends Component {
  render() {
    return (
      <div className="container sectors-container">
        <div className="container-body">
          <h2 className="container-title">Sectores</h2>
          <div className="container-sectors">
            <ul className="container-sectors--items">
              <li className="container-sectors--item">
                <span className="container-sectors--icon alimentacion"></span>
                <a className="container-sectors--link">Alimentación</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon comercio"></span>
                <a className="container-sectors--link">Comercio</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon educacion"></span>
                <a className="container-sectors--link">Educación</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon turismo"></span>
                <a className="container-sectors--link">Turismo</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon construccion"></span>
                <a className="container-sectors--link">Construcción</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon electrica"></span>
                <a className="container-sectors--link">Eléctrica</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon comunicacion"></span>
                <a className="container-sectors--link">Medios de Comunicación</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon telecomunicaciones"></span>
                <a className="container-sectors--link">Telecomunicaciones</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon financieros"></span>
                <a className="container-sectors--link">Servicios Financieros</a>
              </li>
              <li className="container-sectors--item">
                <span className="container-sectors--icon software"></span>
                <a className="container-sectors--link">Tecnología y Software</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default Sectores;
