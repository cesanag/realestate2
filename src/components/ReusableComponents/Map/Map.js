import React from 'react';
import './Map.scss';
import map from './MapSample.jpg'

function Map({isMapHidden}) {
    return (
      <div className= {`map-container ${isMapHidden && "is-hidden"}`}>
        <img className="map-img" src={map} alt="map"/>
      </div>
    );
  }

export default Map;
        
    