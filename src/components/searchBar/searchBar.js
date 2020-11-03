import React from 'react';
import './searchBar.scss';
import { ReactComponent as IconSearch} from 'assets/icon/icon-search.svg'
import {Copy} from 'utilities/copy'
import {Color} from 'assets/color'

export default function SearchBar() {
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