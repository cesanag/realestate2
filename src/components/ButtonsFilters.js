import React, {useState} from 'react';
import './style/css/ButtonsFilters.css';
import iconSearch from './icon/icon-search.svg'
import iconFilters from './icon/icon-filters.svg'
import iconMap from './icon/icon-map.svg'
//import iconList from './icon/icon-list.svg'
import {Copy} from './Copy/Copy'


//creaet leftIconButton component.
//props: iconName, buttonText, onButtonClick, buttonStyle (dark, light..)
function ButtonsFilters({children}) {

    return (
        <div className="buttonsfilters-container">
            {children}
        </div>   
    );
  }

  export default ButtonsFilters;
        
    