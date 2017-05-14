import React, { Component } from 'react';
import HomeSearch from './HomeSearch';
import LoginButtons from './LoginButtons';

class Home extends Component {
  render() {
    return (
      <div className="container home-container">
        <div className="container-body">
          <div className="container-body--slogan">
            <h2 className="container-body--title">Haz click y encuentra la opción ideal para trabajar desde casa.</h2>
            <h3 className="container-body--title">¡La primera y única plataforma diseñada para mujeres!</h3>
          </div>
        
          <HomeSearch />
          <LoginButtons />
        </div>
      </div>

    );
  }
}

export default Home;
