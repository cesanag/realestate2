import React from 'react';
import './style/css/ButtonsFilters.css';
import iconSearch from './icon/icon-search.svg'
import {Copy} from './Copy/Copy'

function ButtonsFilters({onFilterClick, onMapClick}) {
    const displayNone = {
        display: "none"
    }
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
                    <button onClick={onFilterClick} className="buttonsfilters-button">{Copy.filter}</button>
                    <select className="buttonsfilters-button">
                            <option style={displayNone} value={Copy.order}>{Copy.order}</option>
                            <option value="Più rilevanti">Recenti</option>
                            <option value="Ordine alfabetico">A alla Z</option>
                            <option value="Ordina per nome">Prezzo</option>
                    </select>
                    <button onClick={onMapClick} className="buttonsfilters-button buttonsfilters-button-map">{Copy.map}</button>
                </div>
            </div>
            <div className="property-found"> 148 {Copy.found} Monza</div>
        </div>   
    );
  }

  export default ButtonsFilters;
        
    