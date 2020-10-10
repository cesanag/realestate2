import React from 'react';
import './Login.scss';
import { ReactComponent as IconLogo } from 'components/icon/icon-logo.svg'
import {Copy} from 'components/Copy/Copy'

function Login() {
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
            <button className="login-button">Entra</button>
        </div>
    </div>
    );
  }

  export default Login;
        
    