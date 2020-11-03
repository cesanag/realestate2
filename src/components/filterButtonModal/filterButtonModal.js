import React from 'react';
import './filterButtonModal.scss';

import { ReactComponent as IconArrowDown } from 'assets/icon/icon-arrowdown.svg'

export default function FilterButtonModal (props) {
    return (
        <div className= "filterbuttonmodal-container ">
            <button className="filterbuttonmodal-button">
                <div className="filterbuttonmodal-text">
                    {props.buttonText}
                </div>
                <IconArrowDown />
            </button>
        </div>
    );
  }        
    