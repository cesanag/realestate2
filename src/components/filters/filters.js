import React from 'react';
import './filters.scss';

function Filters({children, isFilterHidden}) {
    return (
        <div className= {`filters-container ${isFilterHidden && "is-hidden"}`}>
            {children}
        </div>
    );
  }

  export default Filters;
        
    