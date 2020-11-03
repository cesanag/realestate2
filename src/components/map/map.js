import React from 'react';
import './map.scss';
import map from './MapSample.jpg'

export default function Map (props) {
    return (
      <div className= {`map-container ${props.isMapHidden && "is-hidden"}`}>
        <img className={`map-img ${props.isMapHidden && "is-hidden"}`} src={map} alt="map"/>
      </div>
    );
  }        
    