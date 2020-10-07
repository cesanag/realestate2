import React from 'react';
import './style/css/Navigator.css';
import iconLeftArrow from './icon/icon-leftarrow.svg'
import {Copy} from './Copy/Copy';

function Navigator() {
    return (
            <div className="navigator-container">
                <button className="navigator-button back-button">
                    <img className="navigator-img" alt="left-arrow"src={iconLeftArrow}></img>
                    <div className="navigator-text">{Copy.goback}{Copy.listings}</div>
                </button>
                <button type="submit" className="navigator-button save-button">
                    <div className="navigator-text">Salva</div>
                </button>
            </div>
    );
  }

  export default Navigator;
        
    