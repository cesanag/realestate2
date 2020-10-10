import React from 'react';
import './LeftIconButton.scss';

function LeftIconButton({icon, buttonText, onButtonClick}) {

    return (
        <button 
            className="buttonsfilters-button"
            onClick={onButtonClick}>
              <div className="buttonsfilters-img">
                {icon}
              </div>
              <div class="buttonsfilters-text">
                {buttonText}
              </div>
        </button>
    );
  }

export default LeftIconButton;