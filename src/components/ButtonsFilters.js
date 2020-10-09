import React, {useState} from 'react';
import './style/css/ButtonsFilters.css';
import iconSearch from './icon/icon-search.svg'
import iconFilters from './icon/icon-filters.svg'
import iconMap from './icon/icon-map.svg'
//import iconList from './icon/icon-list.svg'
import {Copy} from './Copy/Copy'

function ButtonsFilters({onFilterClick, onMapClick}) {

    const displayNone = {
        display: "none",
    }
    return (
        <div className="buttonsfilters-container">
            <div className="buttonfilters-content">
                    <div className="search-container">
                        <input className="search-input" type="search" 
                            placeholder={Copy.search + " " + Copy.company + "..."} 
                        />
                        <div className="search-icon">
                            <img alt="search-icon" src={iconSearch} />
                        </div>
                    </div> 
            
                <div className="buttonsfilters-buttoncontainer">
                    <button className="buttonsfilters-button button-is-clicked"
                        onClick={onFilterClick}>
                        <img className="buttonsfilters-img" alt="icon-filter"
                            src={iconFilters} 
                        />
                            {Copy.filter}
                    </button>
                    {/* <img className="buttonsfilters-img" alt="icon-map" src={iconList} /> */}
                        <select className="buttonsfilters-button">
                                <option style={displayNone} value={Copy.order}>
                                    {Copy.order}
                                </option>
                                <option value="Più rilevanti">Recenti</option>
                                <option value="Ordine alfabetico">A alla Z</option>
                                <option value="Ordina per nome">Prezzo</option>
                        </select>
                    <button className="buttonsfilters-button button-is-clicked"
                        onClick={onMapClick}>
                            <img className="buttonsfilters-img" alt="icon-map"
                                src={iconMap} 
                            />
                                {Copy.map}
                    </button>
                </div>
            </div>
        </div>   
    );
  }

  export default ButtonsFilters;
        
    