import React from 'react';
import './Feature.scss';

function Feature(featureText) {
    return (
        <div className="panelclose-property-feature">
            <div panel-sample-text={featureText}
                className="panelclose-property-feature-size panelclose-preview">
            </div>
            <div className="panelclose-property-feature-name">
                {featureText}
            </div>
        </div>
    );
  }

  export default Feature;
        
    