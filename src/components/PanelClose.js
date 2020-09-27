import React from 'react';
import './style/css/PanelClose.css';
import {CopyMain, CopyFilters} from './Copy/Copy'

function PanelClose() {
    return (
        
        <div className="panel-container">
            <div className="panel">
                <div className="panel-left">
                    <img className="panel-img" alt="img" src="https://specials-images.forbesimg.com/imageserve/5d0f16f334a5c40008492f2e/960x0.jpg?fit=scale" />
                    <div className="property-price-container">
                        <div className="property-price-text">
                           {CopyMain.currency} 200.000
                        </div>
                     </div>
                </div>
                <div className="panel-right">
                    <div className="panel-right-container">
                        <div className="property-container-address_location">
                            <div className="property-address">
                                via Roma, 154
                            </div>
                            <div className="property-location">
                                Monza MB - {CopyMain.country}
                            </div>
                        </div>
                        <div className="property-feature-container">
                            <div className="property-feature">
                                <div className="property-feature-size">210 {CopyMain.measure}</div>
                                <div className="property-feature-name">{CopyFilters.dimension}</div>
                            </div>
                            <div className="property-feature">
                                <div className="property-feature-size">3</div>
                                <div className="property-feature-name">{CopyFilters.rooms}</div>
                            </div>
                            
                            <div className="property-feature">
                                <div className="property-feature-size">2</div>
                                <div className="property-feature-name">{CopyFilters.bathrooms}</div>
                            </div>
                        </div>
                        
                        <div className="property-description">
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, 
                            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    );
  }

  export default PanelClose;
        
    