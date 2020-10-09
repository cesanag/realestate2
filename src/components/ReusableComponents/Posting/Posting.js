import React from 'react';
import './Posting.scss';
import {Copy} from '../../Copy/Copy'

function Posting(props) {

    function handleInputsEvent (event) {
        props.onChange(event.target.value)
    }

    return (
        <div className="listing-container">
            <div className="listing-name">
                {Copy.newPost}
            </div>
        <form>
            <div className="listing-input">
                <input onChange={handleInputsEvent}
                    name="address" type="text" 
                    className="input input-address required"
                    placeholder={Copy.address} />
                <input
                    name="city" type="text" 
                    className="input input-city"
                    placeholder={Copy.city}/>
                <input 
                    name="province" type="text" 
                    className="input input-province"
                    placeholder={Copy.province}/>
                <input 
                    name="price" type="number" 
                    className="input input-price" step="100" min="0"
                    placeholder={Copy.price}/>
                <input 
                    name="rooms" type="number" 
                    className="input input-rooms" min="0"
                    placeholder={Copy.rooms}/>
                <input
                    name="bathrooms"
                    type="number" 
                    className="input input-bathrooms" min="0"
                    placeholder={Copy.bathrooms}/>
                <input
                    name="dimension"
                    type="number" 
                    className="input input-dimension" step="10"min="0"
                    placeholder={Copy.dimension}/>
                <textarea 
                    name="textarea" id="" cols="30" rows="5" 
                    className="input input-description"
                    placeholder={Copy.description}>
                </textarea>
                <input 
                    className="input upload-photo-button"
                    placeholder={Copy.uploadPhoto}
                    type="file" id="uploadFiles" multiple>
                </input>
            </div>
            </form>
        </div>   
    )
  }

  export default Posting;
        
    