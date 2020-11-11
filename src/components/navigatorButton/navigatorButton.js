import React from 'react';
import './navigatorButton.scss';

export default function NavigatorButton(props) {
    return (
        <button 
            className="navigator-button back-button">
              <div className="navigator-img">
                {props.icon}
              </div>
              <div className="navigator-text">
                {props.buttonText}
              </div>
        </button>
    );
  }