import React from 'react';
import './navigator.scss';

// import { Copy } from 'utilities/copy'

export default function Navigator(props) {
    return (
        <div className="navigator-container">
            {props.children}
        </div>
    );
  }
        
    