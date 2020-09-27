import React from 'react';
import '../style/css/MultiRangeSlider.css';


function MultiRangeSlider() {
    return (
        <div className="multi-range-slider-container">
        <input type="range" className="input" id="input-left" min="0" max="100" value="25" />
        <input type="range" className="input" id="input-right" min="0" max="100" value="75" />
      
		  <div className="slider">
        <div className="track"></div>
        <div className="range"></div>
        <div className="thumb left"></div>
        <div className="thumb right"></div>
      </div>
	</div>
    );
  }

  export default MultiRangeSlider;
        
    