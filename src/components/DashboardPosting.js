import React from 'react';
import './style/css/DashboardPosting.css';
//import {CopyMain} from './Copy/Copy'

function Header() {
    return (
        <div className="listing-container">
            <div className="listing-name">
                Crea Nuovo Annuncio
            </div>
            <div className="listing-input">
                <input type="text" className="input input-address" placeholder="Indirizzo" />
                <input type="text" className="input input-city" placeholder="Città"/>
                <input type="text" className="input input-province" placeholder="Provincia"/>
                <input type="number" className="input input-price" step="100" min="0" placeholder="Prezzo (€)"/>
                <input type="number" className="input input-short input-rooms" min="0"placeholder="Locali"/>
                <input type="number" className="input input-short input-bathrooms" min="0"placeholder="Bagni"/>
                <input type="number" className="input input-short input-dimension" step="10"min="0"placeholder="Superficie (mq)"/>
                <textarea name="textarea" id="" cols="30" rows="5" className="input input-description" placeholder="Descrizione"></textarea>
                
                <button className="upload-photo">
                    Anteprima
                </button>       
                <button className="upload-photo">
                    Carica Foto
                </button>
            </div>
        </div>   
    
    );
  }

  export default Header;
        
    