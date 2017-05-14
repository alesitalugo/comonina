import React, { Component } from 'react';
import HomeSearch from './HomeSearch';
import results from './img/results.jpg';


class ResultsContent extends Component {
  render() {
    return (
    	<div className='results-content'>
        	<img src={results} className="App-logo" alt="logo" />            
     	</div>
    );
  }
}

export default ResultsContent;
