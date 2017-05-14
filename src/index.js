import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

import './css/index.css';
import './css/App.css';
import './css/stylesheet.css';
import './css/mobile.css';
import './css/icons.css';
import DataResult  from './DataResult';
import ResultsSidebar  from './ResultsSidebar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import logo from './img/logo.png';

import LoginButtons from './LoginButtons';

ReactDOM.render(

	<div className='main-content'>
		<Router>  
			<div className="router">    
          <div className="header">
            <div className="header-container">
              <div className="header-container--logo">
                <img src={logo} className="App-logo" alt="logo" />            
              </div>
              <div className="header-container--content">
                <ul className="header-links">
                    <li className="header-links-item"><Link to="/" className="header-links-link">Home</Link></li>
                  <li className="header-links-item"><Link to="/data" className="header-links-link">Trabajos</Link></li>
                  <li className="header-links-item"><Link to="/postular" className="header-links-link">Postúlate</Link></li>   
                  <LoginButtons />
                </ul>
              </div>
            </div>
          </div>
            <Route exact path="/" component={Home}/>             
            <Route exact path="/data" component={DataResult}/>
            <Route exact path="/postular" component={ResultsSidebar}/>   

          </div>             
        </Router>   		
  	</div>,
  document.getElementById('root')
);
