import React, { Component } from 'react';

class Quienes extends Component {
  render() {
    return (
      <div className="container quienes-container">
          <div className="container-quienes">
            <div className="container-quienes--body">
              <span className="container-sectors--icon quienes"></span><br/>
              <h2 className="container-quienes--title">¿Quiénes somos?</h2>
              <p className="container-quienes--text">Look for Marie es una plataforma creada para las mujeres que están en busca de trabajo pero que por alguna razón o inconveniente no pueden laborar en jornadas de tiempo completo y prefieren hacerlo desde casa. Al mismo tiempo, somos un espacio en dnde las mujeres pueden ofrecer su trabajo o servicios.</p>
            </div>
          </div>
          <div className="container-porque">
            <div className="container-porque--body">
                <h2 className="container-porque--title">¿Por qué Look for Marie?</h2>
                <div className="container-porque--content">
                  <div className="container-porque--item">
                    <div className="container-porque--icon porque-icon">
                      <span className="container-sectors--icon trabajo"></span>
                    </div>
                    <h3 className="container-item--title">Apoyamos el trabajo de las mujeres</h3>
                    <p className="container-item--text">Hay muchas mujeres talentosas en México que tienen ganas de demostrar sus habilidades y conocimientos pero por alguna razón no han tenido la oportunidad de hacerlo.</p>
                  </div>
                  <div className="container-porque--item">
                    <div className="container-porque--icon porque-icon">
                      <span className="container-sectors--icon homeoffice "></span>
                    </div>
                    <h3 className="container-item--title">Fomentamos el Home Office</h3>
                    <p className="container-item--text">Encuentra la oportunidad de tener un sueldo fijo haciendo lo que te gusta desde la comodidad de tu hogar con un horario que se adapte a sus necesidades.</p>
                  </div>
                  <div className="container-porque--item">
                    <div className="container-porque--icon porque-icon">
                      <span className="container-sectors--icon emprendimiento"></span>
                    </div>
                    <h3 className="container-item--title">Apoyamos a las emprendedoras</h3>
                    <p className="container-item--text">¿por qué no generar ingresos mientras le dedicas tiempo a tu proyecto?</p>
                  </div>
                </div>
            </div>
          </div>
      </div>

    );
  }
}

export default Quienes;
