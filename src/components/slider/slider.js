import React from 'react';
import './slider.scss';

export default function Slider(props) {

    return (
        <div className="slider-container">
            <div className="slider-name">
                {props.sliderName}
            </div>
            <div className="slider-text">
                {props.sliderText} 
            </div>
            <input className="slider" 
                type="range" min={props.sliderMinValue} max={props.sliderMaxValue}
            />
        </div>
    );
}