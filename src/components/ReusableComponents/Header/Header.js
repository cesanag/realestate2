import React from 'react';
import './Header.scss';
import {ReactComponent as IconLogo} from 'components/icon/icon-logo.svg';
import {Copy} from 'components/Copy/Copy';
import {Color} from 'components/Color/Color';

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
        
    