import React, {useState} from 'react';
import './style/css/Posting.css';
import {Copy} from './Copy/Copy'

function Header() {
    const [phone, setPhone] = useState('');
    const handleChange = ({target})=> {
        const newPhone = target.value;
        setPhone(newPhone)
    }
    return (
        <div className="listing-container">
            <div className="listing-name">
                Crea Nuovo Annuncio
            </div>
            <div className="listing-input">
                <input value={phone} onChange={handleChange} type="text" className="input input-address" placeholder={Copy.address} />
                <input value={phone} type="text" className="input input-city" placeholder={Copy.city}/>
                <input type="text" className="input input-province" placeholder={Copy.province}/>
                <input type="number" className="input input-price" step="100" min="0" placeholder={Copy.price}/>
                <input type="number" className="input input-short input-rooms" min="0"placeholder={Copy.rooms}/>
                <input type="number" className="input input-short input-bathrooms" min="0"placeholder={Copy.bathrooms}/>
                <input type="number" className="input input-short input-dimension" step="10"min="0"placeholder={Copy.dimension}/>
                <textarea name="textarea" id="" cols="30" rows="5" className="input input-description" placeholder={Copy.description}></textarea>
                
                <button className="button preview-button">
                    Anteprima
                </button>       
                <button className="button upload-photo-button">
                    Carica Foto
                </button>
            </div>
        </div>   
    
    );
  }

  export default Header;
        
    