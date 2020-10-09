import React from 'react';
import 'components/ReusableComponents/ButtonsFilters/ButtonsFilters.scss';
import iconSearch from 'components/icon/icon-search.svg'
import {Copy} from 'components/Copy/Copy'

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