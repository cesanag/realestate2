import React, {useState} from 'react';
import './style/css/ButtonsFilters.css';

function LeftIconButton({icon, buttonText, onButtonClick}) {

    return (
        <button 
            className="buttonsfilters-button button-is-clicked"
            onClick={onButtonClick}
        >
            <img className="buttonsfilters-img" alt="icon-filter"
                src={icon} 
            />
              {buttonText}
        </button>
    );
  }

export default LeftIconButton;