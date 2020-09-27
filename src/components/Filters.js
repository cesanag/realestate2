import React from 'react';
import './style/css/Filters.css';
import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider.js';
import {CopyMain, CopyFilters} from './Copy/Copy'

function Filters() {
    return (
        <div className="filters-container">
        <div className="filters-closefilters">X</div>
            <div className="filters-type">
                <div className="filters-name">
                    {CopyFilters.type}
                </div>
                        <div className="type-container">
                                <button className="type-button">
                                    <div className="type-text">
                                    {CopyFilters.type1}
                                    </div>
                                </button>
                                <button className="type-button">
                                    <div className="type-text">
                                    {CopyFilters.type2}
                                    </div>
                                </button>
                                <button className="type-button type-button-selected">
                                    <div className="type-text">
                                    {CopyFilters.type3}
                                    </div>
                                </button>
                                <button className="type-button">
                                    <div className="type-text">
                                    {CopyFilters.type4}
                                    </div>
                                </button>
                        </div>
            </div>
            <div className="filters-price">
                <div className="filters-name">
                {CopyFilters.price}
                </div>
                <div className="slider-container">
                    <div className="slider-text">{CopyMain.currency} 10000</div>
                    <input className="slider" type="range" min="1000" max="10000000" />
                    <MultiRangeSlider className="slider"/>
                </div>
            </div>
            <div className="filters-dimensione">
                <div className="filters-name">
                    {CopyFilters.dimension}
                </div>
                <div className="slider-container">
                    <div className="slider-text">{CopyMain.measure} 180</div>
                    <input className="slider" type="range" min="10" max="500" />
                </div>
            </div>
            
            <div className="filters-feature">
                <div className="filters-name">
                {CopyFilters.rooms}
                </div>
                <div className="slider-container">
                    <div className="slider-text">2</div>
                    <input className="slider" type="range" min="10" max="500" />
                </div>
                
                <div className="filters-name">
                    {CopyFilters.bathrooms}
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
        
    