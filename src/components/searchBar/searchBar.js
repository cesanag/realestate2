import React from 'react';
import './searchBar.scss';

export default function SearchBar(props) {
    return (
        <div className="search-container">
            <input className="search-input" type="search" 
                placeholder={props.text} 
            />
        </div> 
    );
}