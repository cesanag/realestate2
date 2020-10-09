import React from 'react';
import './Header.scss';
import iconLogo from 'components/icon/icon-logo.svg';
import {Copy} from 'components/Copy/Copy';

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header-img">
                    <img alt="icon-logo" src={iconLogo} />
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
        
    