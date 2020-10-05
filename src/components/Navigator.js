import React from 'react';
import './style/css/Navigator.css';
import {Copy} from './Copy/Copy';

function Navigator() {
    return (
        <header>
            <div className="navigator-container">
                <button className="navigator-button">
                    {Copy.backArrow} 
                    &nbsp;&nbsp;&nbsp;Indietro
                    
                </button>
                <div className="navigator-text">
                    
                </div>
              

            </div>
        </header>
    );
  }

  export default Navigator;
        
    