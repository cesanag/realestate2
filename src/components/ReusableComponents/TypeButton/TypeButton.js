
import React from 'react';
import './TypeButton.scss';

function TypeButton ({buttonText}) {
    return (
        <div className= "type-container">
            <button className="type-button">
                <div className="type-text">
                    {buttonText}
                </div>
            </button>
        </div>
    );
  }

  export default TypeButton;
        
    