import React, {useState} from 'react';
import './style/css/ButtonsFilters.css';
import iconSearch from './icon/icon-search.svg'
import iconFilters from './icon/icon-filters.svg'
import iconMap from './icon/icon-map.svg'
//import iconList from './icon/icon-list.svg'
import {Copy} from './Copy/Copy'

//creaet leftIconButton component.
//props: iconName, buttonText, onButtonClick, buttonStyle (dark, light..)
function SearchBar() {

    return (
        <div className="search-container">
        <input className="search-input" type="search" 
            placeholder={Copy.search + " " + Copy.company + "..."} 
        />
        <div className="search-icon">
            <img alt="search-icon" src={iconSearch} />
        </div>
    </div> 
    );
  }

  export default SearchBar;