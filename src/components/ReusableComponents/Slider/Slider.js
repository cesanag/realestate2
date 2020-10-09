import React from 'react';
import './Slider.scss';

function Slider({sliderName, sliderText, sliderMinValue, sliderMaxValue}) {
    return (
        <div className="slider-container">
            <div className="slider-name">
            {sliderName}
            </div>
            <div className="slider-text">
                {sliderText} 
            </div>
            <input className="slider" 
                type="range" min={sliderMinValue} max={sliderMaxValue}
            />
        </div>
    );
}

export default Slider;