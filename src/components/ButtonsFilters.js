import React from 'react';
import './style/css/ButtonsFilters.css';
import {Copy} from './Copy/Copy'

function ButtonsFilters() {
    return (
        <div className="buttonsfilters-container">
            <div className="buttonfilters-content">
                    <div className="search-container">
                        <input className="search-input" type="search" placeholder={Copy.search + " " + Copy.company + "..."} />
                        <div className="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="100 -100 200 1200">
                            <g fill="rgb(197, 197, 197)" preserveAspectRatio="xMidYMid meet"><path d="m 501.9 453.7 l -130 -130.7 c 23.6 -33.1 37.8 -74 37.8 -118.2 c 0 -113.4 -92.1 -204.8 -204.8 -204.8 s -204.8 92.2 -204.8 204.8 s 92.2 204.8 204.8 204.8 c 44.1 0 85.1 -14.2 118.2 -37.8 l 130.8 130 c 6.3 7.1 15.8 10.2 23.6 10.2 s 18.1 -3.2 23.6 -10.2 c 14.2 -13.4 14.2 -34.7 0.8 -48.1 l 0 0 z m -297 -88.2 c -88.2 0 -160.7 -71.7 -160.7 -160.7 s 71.7 -160.7 160.7 -160.7 s 160.7 71.7 160.7 160.7 s -72.4 160.7 -160.7 160.7 z"></path></g>
                        </svg>
                        </div>
                    </div> 
            
                <div className="buttonsfilters-buttoncontainer">
                    <button className="buttonsfilters-button">{Copy.filter}</button>
                    <button className="buttonsfilters-button">{Copy.order}</button>
                    <button className="buttonsfilters-button">{Copy.map}</button>
                </div>
            </div>
            <div className="property-found"> 148 {Copy.found} {Copy.city}</div>
        </div>   
    );
  }

  export default ButtonsFilters;
        
    