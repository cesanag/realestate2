import React from 'react';
import './LeftIconButton.scss';

function LeftIconButton({icon, buttonText, onButtonClick}) {

    return (
        <button 
            className="buttonsfilters-button"
            onClick={onButtonClick}>
            <img className="buttonsfilters-img" alt="icon-filter"
                src={icon} 
            />
              {buttonText}
        </button>
    );
  }

export default LeftIconButton;