import React from 'react';
import './style/css/Posting.css';
import {Copy} from './Copy/Copy'

function Posting(props) {
    function handleAddress (event) {
        props.onChange(event.target.value)
    }
    
    return (
        <div className="listing-container">
            <div className="listing-name">
                Crea Nuovo Annuncio
            </div>
            <div className="listing-input">
                <input required onChange={handleAddress} type="text" className="input input-address required" placeholder={Copy.address} />
                <input type="text" className="input input-city" placeholder={Copy.city}/>
                <input type="text" className="input input-province" placeholder={Copy.province}/>
                <input type="number" className="input input-price" step="100" min="0" placeholder={Copy.price}/>
                <input type="number" className="input input-short input-rooms" min="0"placeholder={Copy.rooms}/>
                <input type="number" className="input input-short input-bathrooms" min="0"placeholder={Copy.bathrooms}/>
                <input type="number" className="input input-short input-dimension" step="10"min="0"placeholder={Copy.dimension}/>
                <textarea name="textarea" id="" cols="30" rows="5" className="input input-description" placeholder={Copy.description}>
                </textarea>
                <button type="submit" className="button preview-button">
                    Anteprima
                </button>
  
                <button className="button upload-photo-button">
                    Carica Foto
                </button>
            </div>
        </div>   
    
    );
  }

  export default Posting;
        
    