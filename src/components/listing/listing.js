import React from 'react';
import './listing.scss';
import {Copy} from 'utilities/copy'

function Listing(props) {

    function handleAddressInputsEvent (event) {
        props.onChangeAddress(event.target.value)
    }
    function handleHouseNumberInputsEvent (event) {
        props.onChangeHouseNumber(event.target.value)
    }
    function handleCityInputsEvent (event) {
        props.onChangeCity(event.target.value)
    }
    function handleProvinceInputsEvent (event) {
        props.onChangeProvince(event.target.value)
    }
    function handlePriceInputsEvent (event) {
        props.onChangePrice(event.target.value)
    }
    function handleRoomInputsEvent (event) {
        props.onChangeRoom(event.target.value)
    }
    function handleBathroomInputsEvent (event) {
        props.onChangeBathroom(event.target.value)
    }
    function handleDimensionInputsEvent (event) {
        props.onChangeDimension(event.target.value)
    }
    function handleDescriptionInputsEvent (event) {
        props.onChangeDescription(event.target.value)
    }

    return (
        <div className="listing-container">
            <div className="listing-name">
                {Copy.newPost}
            </div>
        <form>
            <div className="listing-input">
                <input 
                    onChange={handleAddressInputsEvent}
                    name="address" type="text" 
                    className="input input-address required"
                    placeholder={Copy.address} />
                <input 
                    onChange={handleHouseNumberInputsEvent}
                    name="houseNumber" type="number" 
                    className="input input-address required"
                    placeholder={Copy.houseNumber} />
                <input 
                    onChange={handleCityInputsEvent}
                    name="city" type="text" 
                    className="input input-city"
                    placeholder={Copy.city}/>
                <input
                    onChange={handleProvinceInputsEvent}
                    name="province" type="text" 
                    className="input input-province"
                    placeholder={Copy.province}/>
                <input
                    onChange={handlePriceInputsEvent}
                    name="price" type="number"
                    className="input input-price" step="100" min="0" max="10"
                    placeholder={Copy.price}
                    />
                <input
                    onChange={handleDimensionInputsEvent}
                    name="dimension"
                    type="number" 
                    className="input input-dimension" step="10"min="0"
                    placeholder={Copy.dimension}/>
                <input
                    onChange={handleRoomInputsEvent}
                    name="rooms" type="number" 
                    className="input input-rooms" min="0"
                    placeholder={Copy.rooms}/>
                <input
                    onChange={handleBathroomInputsEvent}
                    name="bathrooms"
                    type="number" 
                    className="input input-bathrooms" min="0"
                    placeholder={Copy.bathrooms}/>
                <textarea
                    onChange={handleDescriptionInputsEvent}
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

  export default Listing;
        
    