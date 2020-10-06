import React from 'react';
import './style/css/Posting.css';
import {Copy} from './Copy/Copy'

function Posting(props) {
    

    // const handleFilterCountries = event => {
    //     const { name, value } = event.target;
    //     setFilterInput({ [name]: value });
    // };

    function handleInputsEvent (event) {
        props.onChange(event.target.value)
    }

    return (
        <div className="listing-container">
            <div className="listing-name">
                {Copy.newPost}
            </div>
            <div className="listing-input">
                <input required onChange={handleInputsEvent}
                    name="address" type="text" 
                    className="input input-address required"
                    placeholder={Copy.address} />
                <input required onChange={handleInputsEvent}
                    name="city" type="text" 
                    className="input input-city"
                    placeholder={Copy.city}/>
                <input required 
                    name="province" type="text" 
                    className="input input-province"
                    placeholder={Copy.province}/>
                <input 
                    name="price" type="number" 
                    className="input input-price" step="100" min="0"
                    placeholder={Copy.price}/>
                <input 
                    name="rooms" type="number" 
                    className="input input-short input-rooms" min="0"
                    placeholder={Copy.rooms}/>
                <input
                    name="bathrooms"
                    type="number" 
                    className="input input-short input-bathrooms" min="0"
                    placeholder={Copy.bathrooms}/>
                <input
                    name="dimension"
                    type="number" 
                    className="input input-short input-dimension" step="10"min="0"
                    placeholder={Copy.dimension}/>
                <textarea 
                    name="textarea" id="" cols="30" rows="5" 
                    className="input input-description"
                    placeholder={Copy.description}>
                </textarea>
                <button className="button upload-photo-button">
                    {Copy.uploadPhoto}
                </button>
            </div>
        </div>   
    )
  }

  export default Posting;
        
    