import React from 'react';
import './navigatorButton.scss';

export default function NavigatorButton(props) {
    return (
        <button 
            className={props.class}
            onClick={props.onButtonClick}>
              <div className="navigator-img">
                {props.icon}
              </div>
              <div className="navigator-text">
                {props.buttonText}
              </div>
        </button>
    );
  }