import React from 'react';
import './panelOpen.scss';

// import image from './ImageSample.jpg'
import { ReactComponent as IconMail } from 'assets/icon/icon-mail.svg'
import { ReactComponent as IconPhone } from 'assets/icon/icon-phone.svg'
import { ReactComponent as IconPrint } from 'assets/icon/icon-print.svg'
import { ReactComponent as IconShare } from 'assets/icon/icon-share.svg'

import {Copy} from 'utilities/copy'
import {Color} from 'assets/color'

function PanelOpen(props) {
    return (
        <div className="panelopen-container">
            <div className="panelopen">
                <div className="panelopen-up">
                    <img className="panelopen-img" alt="" width="30" ></img>
                    <div className="see-more-photo">
                        {Copy.morephoto}
                    </div>
                </div>
                <div className="panelopen-down-container">
                    <div className="panelopen-down-first">
                        <div className="panelopen-down-location_price_feature">
                            <div className="panelopen-down">
                                <div className="panelopen-down-left">
                                    <div panel-sample-text={Copy.address} 
                                        className="panelopen-property-address panelopen-preview">
                                        {props.address}
                                    </div>
                                    <div panel-sample-text={Copy.province} 
                                        className="panelopen-property-location panelopen-preview">
                                    </div>
                                </div>
                                <div className="panelopen-down-right">
                                    <div className="panelopen-property-price-container">
                                        <div panel-sample-text={Copy.price} 
                                            className="panelopen-property-price-text panelopen-preview">
                                        </div>
                                    </div>
                                    <div className="panelopen-property-feature-container">
                                        <div className="panelopen-property-feature">
                                            <div panel-sample-text={Copy.dimension} 
                                                className="panelopen-property-feature-size panelopen-preview">
                                            </div>
                                            <div className="panelopen-property-feature-name">
                                                {Copy.dimension}
                                            </div>
                                        </div>
                                        <div className="panelopen-property-feature">
                                            <div panel-sample-text={Copy.rooms} 
                                                className="panelopen-property-feature-size panelopen-preview">
                                            </div>
                                            <div className="panelopen-property-feature-name"
                                                >{Copy.rooms}
                                            </div>
                                        </div>
                                        <div className="panelopen-property-feature">
                                            <div panel-sample-text={Copy.bathrooms} 
                                                className="panelopen-property-feature-size panelopen-preview">
                                            </div>
                                            <div className="panelopen-property-feature-name">
                                                {Copy.bathrooms}
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="panelopen-down-second">    
                                <button className="panelopen-contact-button-container">
                                        <IconMail fill={Color.green}/>
                                    <div className="panelopen-contact-button-text">
                                        {Copy.email}
                                    </div>
                                </button>
                                <button className="panelopen-contact-button-container">
                                        <IconPhone fill={Color.green}/>
                                    <div className="panelopen-contact-button-text">
                                        {Copy.phone}
                                    </div>
                                </button>
                            </div>
                        </div>    
                        <div panel-sample-text={Copy.description} 
                                className="panelopen-property-description panelopen-preview">
                        </div>
                        <div className="panelopen-social-options-container">
                            <button className="panelopen-social-button-container">
                                <IconPrint fill={Color.none} stroke={Color.black}/>
                                <div className="panelopen-social-button-text">
                                    {Copy.print}
                                </div>
                            </button>
                            <button className="panelopen-social-button-container">
                                <IconShare fill={Color.none} stroke={Color.black}/>
                                <div className="panelopen-social-button-text">
                                    {Copy.share}
                                    </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default PanelOpen;
        
    