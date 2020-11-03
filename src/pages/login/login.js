import React from 'react';
import './login.scss';
import { ReactComponent as IconLogo } from 'assets/icon/icon-logo.svg'
import {Copy} from 'utilities/copy'

export default function Login() {
    return (
        <div className="login-container">
        <div className="login-box">
            <IconLogo fill="#00ab5c"/>
            <div className="login-name">
                {Copy.company}
            </div>
            <div className="login-inputs">
                <input type="text" className="login-username" placeholder="Utente" />
                <input type="password"className="login-password" placeholder="Password" />
            </div>
        </div>
    </div>
    );
  }
        
    