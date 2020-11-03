import React from 'react';
import './feature.scss';

export default function Feature(props) {
    return (
        <div className="panelclose-property-feature">
            <div panel-sample-text={props.featureText}
                className="panelclose-property-feature-size panelclose-preview">
            </div>
            <div className="panelclose-property-feature-name">
                {props.featureText}
            </div>
        </div>
    );
  }
        
    