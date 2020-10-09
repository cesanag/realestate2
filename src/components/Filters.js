import React from 'react';
import './style/css/Filters.css';
// import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider.js';

import {Copy} from './Copy/Copy'
function Filters({isFilterHidden}) {

    //const toggleFilterClasses = `Filters-Container ${toggleFilters ? "is-visible" : "is-hidden"}`
    return (
        <div className= {`filters-container ${isFilterHidden && "is-hidden"}`}>
            <div className="filters-type">
                <div className="filters-name">
                    {Copy.type}
                </div>
                        <div className= "type-container">
                                <button className="type-button">
                                    <div className="type-text">
                                    {Copy.type1}
                                    </div>
                                </button>
                                <button className="type-button">
                                    <div className="type-text">
                                    {Copy.type2}
                                    </div>
                                </button>
                                <button className="type-button type-button-selected">
                                    <div className="type-text">
                                    {Copy.type3}
                                    </div>
                                </button>
                                <button className="type-button">
                                    <div className="type-text">
                                    {Copy.type4}
                                    </div>
                                </button>
                        </div>
            </div>
            <div className="filters-price">
                <div className="filters-name">
                {Copy.price}
                </div>
                <div className="slider-container">
                    <div className="slider-text">{Copy.currency} 10000</div>
                    <input className="slider" type="range" min="1000" max="10000000" />
                    {/* <MultiRangeSlider className="slider"/> */}
                </div>
            </div>
            <div className="filters-dimensione">
                <div className="filters-name">
                    {Copy.dimension}
                </div>
                <div className="slider-container">
                    <div className="slider-text">{Copy.measure} 180</div>
                    <input className="slider" type="range" min="10" max="500" />
                </div>
            </div>
            
            <div className="filters-feature">
                <div className="filters-name">
                {Copy.rooms}
                </div>
                <div className="slider-container">
                    <div className="slider-text">2</div>
                    <input className="slider" type="range" min="10" max="500" />
                </div>
                
                <div className="filters-name">
                    {Copy.bathrooms}
                </div>
                <div className="slider-container">
                    <div className="slider-text">5</div>
                    <input className="slider" type="range" min="10" max="500" />
                </div>
            </div>
            </div>
    );
  }

  export default Filters;
        
    