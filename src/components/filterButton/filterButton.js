import React from 'react';
import './filterButton.scss';

export default function FilterButton (props) {
    return (
        <div className= "filterbutton-container ">
            <button className={`filterbutton-button ${!props.isButtonClicked && "is-selected"}`}
            onClick={props.onButtonClick}>
                <div className="filterbutton-text">
                    {props.buttonText}
                </div>
            </button>
        </div>
    );
  }        
    