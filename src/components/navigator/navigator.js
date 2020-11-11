import React from 'react';
import './navigator.scss';
import NavigatorButton from 'components/navigatorButton/navigatorButton'
import { ReactComponent as IconLeftArrow } from 'assets/icon/icon-arrowleft.svg'

import { Copy } from 'utilities/copy'

export default function Navigator() {
    return (
        
        <div className="navigator-container">
            <NavigatorButton 
                    icon={<IconLeftArrow />}
                    buttonText= "Indietro"
                  />
            <NavigatorButton 
                    buttonText= "Nuovo"
            />
            <NavigatorButton 
                    buttonText= "Elimina"
            />
            <NavigatorButton 
                    buttonText= "Salva"
            />

                {/* <button className="navigator-button back-button">
                    <div className="navigator-img">
                        <IconLeftArrow fill={Color.green} stroke={Color.green}/>
                    </div>
            
                    <div className="navigator-text">
                        {Copy.goback}{Copy.listings}
                    </div>
                </button>
                <button type="submit" className="navigator-button save-button">
                    <div className="navigator-text">Salva</div>
                </button> */}
        </div>
    );
  }
        
    