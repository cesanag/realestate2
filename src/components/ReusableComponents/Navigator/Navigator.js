import React from 'react';
import './Navigator.scss';
import { ReactComponent as IconLeftArrow } from 'components/icon/icon-leftarrow.svg'
import { Copy } from 'components/Copy/Copy'
import { Color } from 'components/Color/Color'

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
        
    