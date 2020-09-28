import React from 'react';
import './style/css/PanelOpen.css';
import image from './ImageSample.jpg'
import {Copy} from './Copy/Copy'

function PanelOpen() {
    return (
        <div className="panelopen-container">
            <div className="panelopen">
                <div className="panelopen-up">
                    <img className="panelopen-img" alt="" src={image}></img>
                    <div className="see-more-photo">
                        10 {Copy.morephoto}
                    </div>
                </div>
            <div className="panelopen-down-container">
                <div className="panelopen-down-first">
                     <div className="panelopen-down-location_price_feature">
                        <div className="panelopen-down">
                            <div className="panelopen-down-left">
                                <div className="panelopen-property-address">
                                    via Roma, 154
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
                            <div className="panelopen-contact-button-container">
                                <div className="panelopen-button-icon">
                                    <svg width="20" height="20" viewBox="0 0 1280.000000 914.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,914.000000) scale(0.100000,-0.100000)" fill="#ffffff">
                                        <path d="M1245 9128 c-27 -5 -88 -16 -135 -24 -524 -95 -962 -526 -1069 -1050 -45 -225 -45 -203 -32 -1255 10 -784 10 -1449 1 -3154 -7 -1188 -10 -2209 -7 -2270 26 -531 273 -944 710 -1192 121 -68 303 -131 444 -153 73 -11 7838 -33 9508 -27 969 3 931 1 1150 62 111 31 327 137 420 207 161 120 304 288 398 468 73 140 111 256 142 433 l25 147 -2 3352 -3 3353 -33 110 c-39 132 -142 344 -214 440 -67 90 -203 226 -293 293 -91 68 -307 175 -416 206 -48 14 -148 34 -222 45 l-135 21 -5094 -1 c-3033 -1 -5113 -5 -5143 -11z m10241 -709 c4 -7 -988 -1006 -2452 -2470 -1931 -1931 -2470 -2465 -2508 -2484 -67 -34 -136 -33 -202 0 -38 20 -618 593 -2513 2484 -1538 1534 -2461 2462 -2457 2469 10 17 10122 17 10132 1z m632 -3785 l-3 -3419 -22 -76 c-53 -187 -151 -314 -294 -383 -42 -20 -87 -36 -101 -36 -19 0 -387 363 -1746 1724 -947 948 -1722 1730 -1722 1738 0 19 3873 3889 3882 3880 5 -5 7 -1547 6 -3428z m-9433 1496 l1910 -1910 -1751 -1751 -1752 -1752 -58 27 c-117 54 -192 139 -242 277 l-27 74 -3 3473 c-1 1909 1 3472 5 3472 5 0 868 -860 1918 -1910z m3009 -3001 c412 -415 618 -615 643 -625 47 -20 130 -20 179 1 28 11 206 182 629 605 325 325 595 590 600 590 15 0 3005 -2993 3005 -3007 0 -10 -877 -13 -4365 -13 -3483 0 -4365 3 -4365 12 0 19 3032 3048 3051 3048 9 0 289 -275 623 -611z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="panelopen-contact-button-text">{Copy.email}</div>
                            </div>
                            <div className="panelopen-contact-button-container">
                                <div>
                                    <svg viewBox="0 -256 1792 1792" width="20" height="20">
                                        <g transform="matrix(1,0,0,-1,159.45763,1293.0169)" fill="#ffffff" preserveAspectRatio="xMidYMid meet" >
                                          <path d="m 1408,296 q 0,-27 -10,-70.5 Q 1388,182 1377,157 1356,107 1255,51 1161,0 1069,0 1042,0 1016.5,3.5 991,7 959,16 927,25 911.5,30.5 896,36 856,51 816,66 807,69 709,104 632,152 504,231 367.5,367.5 231,504 152,632 104,709 69,807 66,816 51,856 36,896 30.5,911.5 25,927 16,959 7,991 3.5,1016.5 0,1042 0,1069 q 0,92 51,186 56,101 106,122 25,11 68.5,21 43.5,10 70.5,10 14,0 21,-3 18,-6 53,-76 11,-19 30,-54 19,-35 35,-63.5 16,-28.5 31,-53.5 3,-4 17.5,-25 14.5,-21 21.5,-35.5 7,-14.5 7,-28.5 0,-20 -28.5,-50 -28.5,-30 -62,-55 -33.5,-25 -62,-53 -28.5,-28 -28.5,-46 0,-9 5,-22.5 5,-13.5 8.5,-20.5 3.5,-7 14,-24 10.5,-17 11.5,-19 76,-137 174,-235 98,-98 235,-174 2,-1 19,-11.5 17,-10.5 24,-14 7,-3.5 20.5,-8.5 13.5,-5 22.5,-5 18,0 46,28.5 28,28.5 53,62 25,33.5 55,62 30,28.5 50,28.5 14,0 28.5,-7 14.5,-7 35.5,-21.5 21,-14.5 25,-17.5 25,-15 53.5,-31 28.5,-16 63.5,-35 35,-19 54,-30 70,-35 76,-53 3,-7 3,-21 z"/>
                                        </g>
                                      </svg>
                                </div>
                                <div className="panelopen-contact-button-text">{Copy.phone}</div>
                            </div>
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
                                <div className="panelopen-social-button-container">
                                    <div className="panelopen-social-button-text">{Copy.print}</div>
                                </div>
                                <div className="panelopen-social-button-container">
                                    <div className="panelopen-social-button-text">{Copy.share}</div>
                                </div>
                            </div>
                        </div>
                    
            </div>
        </div>
        </div>
    );
  }

  export default PanelOpen;
        
    