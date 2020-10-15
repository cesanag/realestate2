
import React from 'react';
import './typeButton.scss';

function TypeButton ({buttonText, onButtonClick, isButtonClicked}) {

    return (
        <div className= "type-container ">
            <button className={`type-button ${!isButtonClicked && "is-selected"}`}
            onClick={onButtonClick}>
                <div className="type-text">
                    {buttonText}
                </div>
            </button>
        </div>
    );
  }

  export default TypeButton;
        
    