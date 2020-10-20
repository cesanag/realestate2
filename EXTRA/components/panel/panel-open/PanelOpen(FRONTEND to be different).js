import React from 'react';
import './style/css/PanelOpen.css';

import iconMail from './icon/icon-mail.svg'
import iconPhone from './icon/icon-phone.svg'
import iconPrint from './icon/icon-print.svg'
import iconShare from './icon/icon-share.svg'

import {Copy} from './Copy/Copy'

function PanelOpen(props) {
    return (
        <div className="panelopen-container">
            <div className="panelopen">
                <div className="panelopen-up">
                    <img className="panelopen-img" alt="" src={}></img>
                    <div className="see-more-photo">
                        10 {Copy.morephoto}
                    </div>
                </div>
            <div className="panelopen-down-container">
                <div className="panelopen-down-first">
                     <div className="panelopen-down-location_price_feature">
                        <div className="panelopen-down">
                            <div className="panelopen-down-left">
                                
                                <div  className="panelopen-property-address">
                                    <input value={props.value}></input>
                                </div>
                                <div className="panelopen-property-location">
                                    Monza MB - {Copy.country}
                                </div>
                            </div>
                            <div className="panelopen-down-right">
                                    <div className="panelopen-property-price-container">
                                        <div className="panelopen-property-price-text"> {Copy.currency} 200.000</div>
                                    </div>
                                    <div className="panelopen-property-feature-container">
                                        <div className="panelopen-property-feature">
                                            <div className="panelopen-property-feature-size">210 {Copy.measure}</div>
                                            <div className="panelopen-property-feature-name">{Copy.dimension}</div>
                                        </div>
                                        <div className="panelopen-property-feature">
                                            <div className="panelopen-property-feature-size">3</div>
                                            <div className="panelopen-property-feature-name">{Copy.rooms}</div>
                                        </div>
                                        
                                        <div className="panelopen-property-feature">
                                            <div className="panelopen-property-feature-size">2</div>
                                            <div className="panelopen-property-feature-name">{Copy.bathrooms}</div>
                                        </div>   
                                    </div>
                            </div>
                        </div>
                            <div className="panelopen-down-second">    
                            <button className="panelopen-contact-button-container">    
                                <img className="panelopen-contact-button-image" alt="icon-mail" src={iconMail} />   
                                <div className="panelopen-contact-button-text">{Copy.email}</div>
                            </button>
                            <button className="panelopen-contact-button-container">
                                <img className="panelopen-contact-button-image" alt="icon-phone" src={iconPhone} />
                                <div className="panelopen-contact-button-text">{Copy.phone}</div>
                            </button>
                        </div>
                   
                        </div>    
                            <div className="panelopen-property-description">
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
                            </div>
                            <div className="panelopen-social-options-container">
                                <button className="panelopen-social-button-container">
                                    <img className="panelopen-social-button-image" src={iconPrint} alt="icon-print"/>
                                    <div className="panelopen-social-button-text">{Copy.print}</div>
                                </button>
                                <button className="panelopen-social-button-container">
                                    <img className="panelopen-social-button-image" src={iconShare} alt="icon-share"/>
                                    <div className="panelopen-social-button-text">{Copy.share}</div>
                                </button>
                            </div>
                        </div>
                    
            </div>
        </div>
        </div>
    );
  }

  export default PanelOpen;
        
    