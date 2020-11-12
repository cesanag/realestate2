import React from 'react';
import './map.scss';
// import map from './MapSample.jpg'
import { MapContainer, Marker, TileLayer } from "react-leaflet";


export default function Map (props) {
    return (
      <div className= {`map-container ${props.isMapHidden && "is-hidden"}`}>
        {/* <img className={`map-img ${props.isMapHidden && "is-hidden"}`} src={map} alt="map"/> */}
        <MapContainer center={[45.5845, 9.2744]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[45.5845, 9.2744]}>
          </Marker>
          <Marker position={[45.5857, 9.2734]}>
          </Marker>
          <Marker position={[45.5812, 9.2725]}>
          </Marker>
        </MapContainer>
      </div>
    );
  }        
    