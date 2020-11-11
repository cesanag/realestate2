import React from 'react';
import './panelClose.scss';
//import img0 from 'assets/image/img0.jpg'
import {Copy} from 'utilities/copy';

// import  IconImg  from 'assets/icon/icon-imgplaceholder.svg'
// import { ReactComponent as IconDimension } from 'assets/icon/icon-dimension.svg'
// import { ReactComponent as IconBathroom } from 'assets/icon/icon-bathroom.svg'
// import { ReactComponent as IconRoom } from 'assets/icon/icon-room.svg'


export default function PanelClose(props) {
    return (
        <div className="panelclose-container">
            <div className="panelclose">
                <div className="panelclose-left">
                    <div className="panelclose-img" alt=""></div>
                    <div className="panelclose-property-price-container">
                        <div panel-sample-text={Copy.currency}
                            className="panelclose-property-price-text panelclose-preview">
                            {Copy.currency}
                        </div>
                        <div panel-sample-text={Copy.samplePrice}
                            className="panelclose-property-price-text panelclose-preview">
                            {props.price}
                        </div>
                        
                     </div>
                </div>
                <div className="panelclose-right">
                    <div  className="panelclose-right-content">
                        <div className="panelclose-property-container-address_location">
                            <div className="panelclose-property-content">
                                <div panel-sample-text={Copy.address}
                                    className="panelclose-property-address panelclose-preview">
                                    {props.address}
                                </div>
                                <div panel-sample-text={Copy.whitespace}
                                    className="panelclose-property-address panelclose-preview">
                                    {Copy.whitespace}
                                </div>
                                <div panel-sample-text={Copy.ouseNumber}
                                    className="panelclose-property-address panelclose-preview">
                                    {props.houseNumber}
                                </div>
                            </div>
                            <div className="panelclose-property-content">
                                <div panel-sample-text={Copy.zip}
                                    className="panelclose-property-location panelclose-preview">
                                    {props.zip}
                                </div>
                                <div panel-sample-text={Copy.whitespace}
                                        className="panelclose-property-feature-size panelclose-preview">
                                        {Copy.whitespace}
                                </div>
                                <div panel-sample-text={Copy.city}
                                    className="panelclose-property-location panelclose-preview">
                                    {props.city}
                                </div>
                                <div panel-sample-text={Copy.whitespace}
                                        className="panelclose-property-feature-size panelclose-preview">
                                        {Copy.whitespace}
                                </div>
                                <div panel-sample-text={Copy.province}
                                    className="panelclose-property-location panelclose-preview">
                                    {props.province}
                                </div>
                            </div>
                        </div>
                        <div className="panelclose-property-feature-container">
                            
                            <div className="panelclose-property-feature">
                                <div className="panelclose-property-feature-up">
                                    <div panel-sample-text={Copy.sampleDimension}
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {props.dimension}
                                    </div>
                                    <div panel-sample-text={Copy.whitespace}
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {Copy.whitespace}
                                    </div>
                                    <div panel-sample-text={Copy.measure}
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {Copy.measure}
                                    </div>

                                    {/* <div className="panelclose-property-feature-img">
                                        <IconDimension />
                                    </div> */}

                                </div>
                                <div className="panelclose-property-feature-name">
                                    {Copy.dimension}
                                </div>
                            </div>
                            <div className="panelclose-property-feature">
                                <div className="panelclose-property-feature-up">
                                    <div panel-sample-text={Copy.sampleRooms}
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {props.room}
                                    </div>
                                    {/* <div className="panelclose-property-feature-img">
                                        <IconRoom />
                                    </div> */}
                                </div>
                                <div className="panelclose-property-feature-name">
                                    {Copy.rooms}
                                </div>
                            </div>
                            
                            <div className="panelclose-property-feature">
                                <div className="panelclose-property-feature-up">
                                    <div panel-sample-text={Copy.sampleBathrooms}
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {props.bathroom}
                                    </div>
                                    {/* <div className="panelclose-property-feature-img">
                                        <IconBathroom />
                                    </div> */}
                                </div>
                                <div className="panelclose-property-feature-name">
                                    {Copy.bathrooms}
                                </div>
                            </div>
                        </div>
                        <div panel-sample-text={Copy.description} 
                            className="panelclose-property-description panelclose-preview">
                                {props.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
        
    