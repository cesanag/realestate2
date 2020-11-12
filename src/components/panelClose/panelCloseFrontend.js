import React from 'react';
import './panelCloseFrontend.scss';
import img0 from 'assets/image/img0.jpg'
import {Copy} from 'utilities/copy';

import { ReactComponent as IconDimension } from 'assets/icon/icon-dimension.svg'
import { ReactComponent as IconBathroom } from 'assets/icon/icon-bathroom.svg'
import { ReactComponent as IconRoom } from 'assets/icon/icon-room.svg'


export default function PanelClose() {
    return (
        <div className="panelclose-container">
            <div className="panelclose">
                <div className="panelclose-left">
                    <img className="panelclose-img" alt="" src={img0} />
                    <div className="panelclose-property-price-container">
                        <div 
                            className="panelclose-property-price-text panelclose-preview">
                            {Copy.currency}
                        </div>
                        <div 
                            className="panelclose-property-price-text panelclose-preview">
                            {Copy.samplePrice}
                        </div>
                        
                     </div>
                </div>
                <div className="panelclose-right">
                    <div  className="panelclose-right-content">
                        <div className="panelclose-property-container-address_location">
                            <div className="panelclose-property-content">
                                <div
                                    className="panelclose-property-address panelclose-preview">
                                    {Copy.sampleStreet}
                                </div>
                                <div 
                                    className="panelclose-property-address panelclose-preview">
                                    {Copy.whitespace}
                                </div>
                                <div 
                                    className="panelclose-property-address panelclose-preview">
                                    {Copy.sampleAddress}
                                </div>
                                <div 
                                    className="panelclose-property-address panelclose-preview">
                                    {Copy.whitespace}
                                </div>
                                <div 
                                    className="panelclose-property-address panelclose-preview">
                                    {Copy.sampleHouseNumber}
                                </div>
                            </div>
                            <div className="panelclose-property-content">
                                <div 
                                    className="panelclose-property-location panelclose-preview">
                                    {Copy.sampleZip}
                                </div>
                                <div 
                                    className="panelclose-property-feature-size panelclose-preview">
                                    {Copy.whitespace}
                                </div>
                                <div 
                                    className="panelclose-property-location panelclose-preview">
                                    {Copy.sampleCity}
                                </div>
                                <div 
                                        className="panelclose-property-feature-size panelclose-preview">
                                    {Copy.whitespace}
                                </div>
                                <div 
                                    className="panelclose-property-location panelclose-preview">
                                    {Copy.sampleProvince}
                                </div>
                            </div>
                        </div>
                        <div className="panelclose-property-feature-container">
                            
                            <div className="panelclose-property-feature">
                                <div className="panelclose-property-feature-up">
                                    <div 
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {Copy.sampleDimension}
                                    </div>
                                    <div
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {Copy.whitespace}
                                    </div>
                                    <div
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {Copy.measure}
                                    </div>

                                    <div className="panelclose-property-feature-img">
                                        <IconDimension />
                                    </div>

                                </div>
                                <div className="panelclose-property-feature-name">
                                    {Copy.dimension}
                                </div>
                            </div>
                            <div className="panelclose-property-feature">
                                <div className="panelclose-property-feature-up">
                                    <div
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {Copy.sampleRooms}
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
                                    <div
                                        className="panelclose-property-feature-size panelclose-preview">
                                            {Copy.sampleBathrooms}
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
                        {/* <div 
                            className="panelclose-property-description panelclose-preview">
                                {Copy.sampleDescription} 
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
  }
        
    