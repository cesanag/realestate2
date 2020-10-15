import React from 'react';
import './navigator.scss';
import { ReactComponent as IconLeftArrow } from 'assets/icon/icon-leftarrow.svg'
import { Copy } from 'utilities/copy'
import { Color } from 'assets/color'

function Navigator() {
    return (
        <div className="navigator-container">
            <button className="navigator-button back-button">
                <div className="navigator-img">
                    <IconLeftArrow fill={Color.green} stroke={Color.green}/>
                </div>
        
                <div className="navigator-text">
                    {Copy.goback}{Copy.listings}
                </div>
            </button>
            <button type="submit" className="navigator-button save-button">
                <div className="navigator-text">Salva</div>
            </button>
        </div>
    );
  }

  export default Navigator;
        
    