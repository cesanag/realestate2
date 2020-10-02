import React from 'react';
import './style/css/Map.css';
import map from './MapSample.jpg'


function Map() {
    return (
      <div className="map-container">
        <img className="map-content" src={map} alt="map"/>
      </div>
        
    );
  }

export default Map;
        
    