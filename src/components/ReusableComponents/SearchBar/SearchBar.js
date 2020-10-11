import React from 'react';
import './SearchBar.scss';
import { ReactComponent as IconSearch} from 'components/icon/icon-search.svg'
import {Copy} from 'components/Copy/Copy'
import {Color} from 'components/Color/Color'

function SearchBar() {
    return (
        <div className="search-container">
            <input className="search-input" type="search" 
                placeholder={Copy.search + " " + Copy.company + "..."} 
            />
            <div className="search-icon">
                <IconSearch fill={Color.midGrey}/>
            </div>
        </div> 
    );
}

  export default SearchBar;