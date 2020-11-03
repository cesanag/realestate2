import React from 'react';
import './leftIconButton.scss';

export default function LeftIconButton(props) {
    return (
        <button 
            className={`filterbuttonmain-button ${props.isButtonClicked && "is-clicked"}`}
            onClick={props.onButtonClick}>
              <div className="filterbuttonmain-img">
                {props.icon}
              </div>
              <div className="filterbuttonmain-text">
                {props.buttonText}
              </div>
        </button>
    );
  }