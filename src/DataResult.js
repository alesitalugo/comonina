import React, { Component } from 'react';
import HomeSearch from './HomeSearch';
import ResultsSidebar from './ResultsSidebar';
import ResultsContent from './ResultsContent';
import Networking from './Networking';

class DataResult extends Component {
  render() {
    return (

    	<div className='results'>
        <div className="search-results">
          <HomeSearch />        
        </div>
        <div className="results-container">
          <ResultsContent />
        </div>
        <Networking />        
      </div>
    );
  }
}

export default DataResult;
