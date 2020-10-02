import React from 'react';
import './style/css/PanelClose.css';
import image from './ImageSample.jpg';
import {Copy} from './Copy/Copy';

function PanelClose() {
    return (
        <div className="panelclose-container">
            <div className="panelclose">
                <div className="panelclose-left">
                    <img className="panelclose-img" alt="img" src={image} />
                    <div className="panelclose-property-price-container">
                        <div className="panelclose-property-price-text">
                           {Copy.currency} 200.000
                        </div>
                     </div>
                </div>
                <div className="panelclose-right">
                        <div className="panelclose-property-container-address_location">
                            <div className="panelclose-property-address">
                                via Roma, 154
                            </div>
                            <div className="panelclose-property-location">
                                Monza MB - {Copy.country}
                            </div>
                        </div>
                        <div className="panelclose-property-feature-container">
                            <div className="panelclose-property-feature">
                                <div className="panelclose-property-feature-size">210 {Copy.measure}</div>
                                <div className="panelclose-property-feature-name">{Copy.dimension}</div>
                            </div>
                            <div className="panelclose-property-feature">
                                <div className="panelclose-property-feature-size">3</div>
                                <div className="panelclose-property-feature-name">{Copy.rooms}</div>
                            </div>
                            
                            <div className="panelclose-property-feature">
                                <div className="panelclose-property-feature-size">2</div>
                                <div className="panelclose-property-feature-name">{Copy.bathrooms}</div>
                            </div>
                        </div>
                        
                        <div className="panelclose-property-description">
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, 
                            you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, 
                            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, 
                            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, 
                            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, 
                            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                        </div>
                </div>
            </div>
        </div>
   
    );
  }

  export default PanelClose;
        
    