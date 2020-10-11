import React from 'react';
import './LeftIconButton.scss';

function LeftIconButton({icon, buttonText, onButtonClick, isButtonClicked}) {

    return (
        <button 
            className={`buttonsfilters-button ${isButtonClicked && "is-clicked"}`}
            onClick={onButtonClick}>
              <div className="buttonsfilters-img">
                {icon}
              </div>
              <div className="buttonsfilters-text">
                {buttonText}
              </div>
        </button>
    );
  }

export default LeftIconButton;