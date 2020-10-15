import React from 'react';
import './panelClose.scss';
// import image from './ImageSample.jpg';
import {Copy} from 'utilities/copy';

import {ReactComponent as IconBathroom} from 'assets/icon/icon-bathroom.svg'
import {ReactComponent as IconRoom} from 'assets/icon/icon-room.svg'


function PanelClose(props) {
    return (
        <div className="panelclose-container">
            <div className="panelclose">
                <div className="panelclose-left">
                    <img className="panelclose-img" alt="" />
                    <div className="panelclose-property-price-container">
                        <div panel-sample-text={Copy.price}
                            className="panelclose-property-price-text panelclose-preview">
                        </div>
                     </div>
                </div>
                <div className="panelclose-right">
                    <div className="panelclose-property-container-address_location">
                        <div panel-sample-text={Copy.address} 
                            className="panelclose-property-address panelclose-preview">
                            {props.address}
                        </div>
                        <div panel-sample-text={Copy.province}
                            className="panelclose-property-location panelclose-preview">
                        </div>
                    </div>
                    <div className="panelclose-property-feature-container">
                        
                        <div className="panelclose-property-feature">
                            <div className="panelclose-property-feature-up">
                                <div panel-sample-text={`${Copy.sampleDimension} ${Copy.measure}`}
                                    className="panelclose-property-feature-size panelclose-preview">
                                </div>
                                <div className="panelclose-property-feature-img">
                                </div>
                            </div>
                            <div className="panelclose-property-feature-name">
                                {Copy.dimension}
                            </div>
                        </div>
                        <div className="panelclose-property-feature">
                            <div className="panelclose-property-feature-up">
                                <div panel-sample-text={Copy.sampleRooms}
                                    className="panelclose-property-feature-size panelclose-preview">
                                </div>
                                <div className="panelclose-property-feature-img">
                                    <IconRoom />
                                </div>
                            </div>
                            <div className="panelclose-property-feature-name">
                                {Copy.rooms}
                            </div>
                        </div>
                        
                        <div className="panelclose-property-feature">
                            <div className="panelclose-property-feature-up">
                                <div panel-sample-text={Copy.sampleBathrooms}
                                    className="panelclose-property-feature-size panelclose-preview">
                                </div>
                                <div className="panelclose-property-feature-img">
                                    <IconBathroom />
                                </div>
                            </div>
                            <div className="panelclose-property-feature-name">
                                {Copy.bathrooms}
                            </div>
                        </div>
                    </div>
                    <div panel-sample-text={Copy.description} 
                        className="panelclose-property-description panelclose-preview">
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default PanelClose;
        
    