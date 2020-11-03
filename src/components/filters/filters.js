import React from 'react';
import './filters.scss';

export default function Filters(props) {
    return (
        <div className= {`filters-container ${props.isFilterHidden && "is-hidden"}`}>
            {props.children}
        </div>
    );
  }
        
    