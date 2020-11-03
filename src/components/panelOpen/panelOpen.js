import React from 'react';
import './panelOpen.scss';

//import img0 from 'assets/image/img0.jpg'
import { ReactComponent as IconImg } from 'assets/icon/icon-imgplaceholder.svg'
import { ReactComponent as IconDimension } from 'assets/icon/icon-dimension.svg'
import { ReactComponent as IconBathroom } from 'assets/icon/icon-bathroom.svg'
import { ReactComponent as IconRoom } from 'assets/icon/icon-room.svg'
import { ReactComponent as IconMail } from 'assets/icon/icon-mail.svg'
import { ReactComponent as IconPhone } from 'assets/icon/icon-phone.svg'
import { ReactComponent as IconPrint } from 'assets/icon/icon-print.svg'
import { ReactComponent as IconShare } from 'assets/icon/icon-share.svg'

import {Copy} from 'utilities/copy'
import {Color} from 'assets/color'

export default function PanelOpen(props) {
    return (
        <div className="panelopen-container">
            <div className="panelopen">
                <div className="panelopen-up"
                onClick={props.onModalClick}>
                    <img className="panelopen-img" src={IconImg} alt="" width="30" ></img>
                    <button className="see-more-photo"
                        onClick={props.onModalClick}>
                        {Copy.morephoto}
                    </button>
                </div>
                <div className="panelopen-down-container">
                    <div className="panelopen-down-first">
                        <div className="panelopen-down-location_price_feature">
                            <div className="panelopen-down">
                                <div className="panelopen-down-left">
                                    <div className="panelopen-property-content">
                                        <div panel-sample-text={Copy.address} 
                                            className="panelopen-property-address panelopen-preview">
                                            {props.address}
                                        </div>
                                        <div panel-sample-text={Copy.whitespace}
                                            className="panelopen-property-address panelopen-preview">
                                            {Copy.whitespace}
                                        </div>
                                        <div panel-sample-text={Copy.houseNumber} 
                                            className="panelopen-property-address panelopen-preview">
                                            {props.houseNumber}
                                        </div>
                                    </div>
                                    <div className="panelopen-property-content">
                                        <div panel-sample-text={Copy.zip} 
                                            className="panelopen-property-location panelopen-preview">
                                            {props.zip}
                                        </div>
                                        <div panel-sample-text={Copy.whitespace} 
                                            className="panelopen-property-feature-size panelopen-preview">
                                            {Copy.whitespace}
                                        </div>
                                        <div panel-sample-text={Copy.city} 
                                            className="panelopen-property-location panelopen-preview">
                                            {props.city}
                                        </div>
                                        <div panel-sample-text={Copy.whitespace} 
                                            className="panelopen-property-feature-size panelopen-preview">
                                            {Copy.whitespace}
                                        </div>
                                        <div panel-sample-text={Copy.province} 
                                            className="panelopen-property-location panelopen-preview">
                                            {props.province}
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="panelopen-down-right">
                                    <div className="panelopen-property-price-container">
                                        <div panel-sample-text={Copy.currency}
                                            className="panelopen-property-price-text panelopen-preview">
                                             {Copy.currency}
                                        </div>
                                        <div panel-sample-text={Copy.samplePrice}
                                            className="panelopen-property-price-text panelopen-preview">
                                             {props.price}
                                        </div>
                                    </div>
                                    <div className="panelopen-property-feature-container">
                                        <div className="panelopen-property-feature">
                                            <div className="panelopen-property-feature-up">
                                                <div panel-sample-text={Copy.sampleDimension} 
                                                    className="panelopen-property-feature-size panelopen-preview">
                                                        {props.dimension}
                                                </div>
                                                <div panel-sample-text={Copy.whitespace} 
                                                    className="panelopen-property-feature-size panelopen-preview">
                                                        {Copy.whitespace}
                                                </div>
                                                <div panel-sample-text={Copy.measure} 
                                                    className="panelopen-property-feature-size panelopen-preview">
                                                        {Copy.measure}
                                                </div>
                                                <div className="panelopen-property-feature-img">
                                                    <IconDimension />
                                                </div>
                                            </div>
                                                <div className="panelopen-property-feature-name">
                                                    {Copy.dimension}
                                                </div>
                                        </div>
                                        <div className="panelopen-property-feature">
                                            <div className="panelopen-property-feature-up">
                                                <div panel-sample-text={Copy.sampleRooms} 
                                                    className="panelopen-property-feature-size panelopen-preview">
                                                        {props.room}
                                                </div>
                                                <div className="panelopen-property-feature-img">
                                                    <IconRoom />
                                                </div>
                                            </div>
                                            <div className="panelopen-property-feature-name"
                                                    >{Copy.rooms}
                                            </div>
                                        </div>
                                        <div className="panelopen-property-feature">
                                            <div className="panelopen-property-feature-up">
                                                <div panel-sample-text={Copy.sampleBathrooms} 
                                                    className="panelopen-property-feature-size panelopen-preview">
                                                        {props.bathroom}
                                                </div>
                                                <div className="panelopen-property-feature-img">
                                                    <IconBathroom />
                                                </div>
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
                                    {props.description}
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
    