import React from 'react';
import './sliderMulti.scss';

function SliderMulti({sliderName, sliderText, sliderMinValue, sliderMaxValue}) {

    return (
        <div className="multi-range-slider-container">
            <div className="slider-name">
                {sliderName}
            </div>
            <div className="slider-text">
                {sliderText} 
            </div>
            <input type="range" className="input" id="input-left" min="0" max="100" />
            <input type="range" className="input" id="input-right" min="0" max="100" />
            <div className="slider">
                <div className="track"></div>
                <div className="range"></div>
                <div className="thumb left"></div>
                <div className="thumb right"></div>
            </div>
		</div>
    );
}

export default SliderMulti;