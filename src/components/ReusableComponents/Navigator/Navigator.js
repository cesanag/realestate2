import React from 'react';
import './Navigator.scss';
import iconLeftArrow from 'components/icon/icon-leftarrow.svg'
import {Copy} from '../../Copy/Copy';

function Navigator() {
    return (
        <div className="navigator-container">
            <button className="navigator-button back-button">
                <img className="navigator-img" alt="left-arrow"
                    src={iconLeftArrow} />
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
        
    