import React from 'react';
import './header.scss';
import {ReactComponent as IconLogo} from 'assets/icon/icon-logo.svg';
import {Copy} from 'utilities/copy';
import {Color} from 'assets/color';

function Header() {
    return (
        <header>
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
        </header>
    );
  }

  export default Header;
        
    