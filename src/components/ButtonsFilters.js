import React from 'react';
import './style/css/ButtonsFilters.css';
import iconSearch from './icon/icon-search.svg'
import {Copy} from './Copy/Copy'

function ButtonsFilters() {
    return (
        <div className="buttonsfilters-container">
            <div className="buttonfilters-content">
                    <div className="search-container">
                        <input className="search-input" type="search" placeholder={Copy.search + " " + Copy.company + "..."} />
                        <div className="search-icon">
                            <img alt="icon-search" src={iconSearch} />
                        </div>
                    </div> 
            
                <div className="buttonsfilters-buttoncontainer">
                    <button className="buttonsfilters-button">{Copy.filter}</button>
                    <button className="buttonsfilters-button">{Copy.order}</button>
                    <button className="buttonsfilters-button">{Copy.map}</button>
                </div>
            </div>
            <div className="property-found"> 148 {Copy.found} Monza</div>
        </div>   
    );
  }

  export default ButtonsFilters;
        
    