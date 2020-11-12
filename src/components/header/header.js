import React from 'react';
import './header.scss';

import {ReactComponent as IconLogo} from 'assets/icon/icon-logo.svg';
import {Copy} from 'utilities/copy';
import {Color} from 'assets/color';

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-img">
                <IconLogo fill={Color.white}/>
            </div>
            <div className="header-text">
                {Copy.company}
            </div>
            <div className="button-login">
            </div>
        </div>
    );
  }
        
    