import React from 'react';
import './listing.scss';
import {Copy} from 'utilities/copy'

export default function Listing(props) {

    function handleAddressInputsEvent (event) {
        props.onChangeAddress(event.target.value)
    }
    function handleHouseNumberInputsEvent (event) {
        props.onChangeHouseNumber(event.target.value)
    }
    function handleZipInputsEvent (event) {
        props.onChangeZip(event.target.value)
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
                <div className="listing-input-row">
                    <input 
                        onChange={handleAddressInputsEvent}
                        name="address" type="text" 
                        className="input input-address" required
                        placeholder={Copy.address} />
                    <input 
                        onChange={handleHouseNumberInputsEvent}
                        name="houseNumber" type="number" 
                        className="input input-small input-address required" min="1"
                        placeholder={Copy.houseNumber} />
                </div>
                    <input 
                        onChange={handleZipInputsEvent}
                        name="zip" type="number" 
                        className="input input-city"
                        placeholder={Copy.zip}
                        />
                <div className="listing-input-row">
                    <input 
                        onChange={handleCityInputsEvent}
                        name="city" type="text" 
                        className="input input-city"
                        placeholder={Copy.city}/>
                    <input
                        onChange={handleProvinceInputsEvent}
                        name="province" type="text" 
                        className="input input-small input-province"
                        placeholder={Copy.province}/>
                    </div>
                    <input
                        onChange={handlePriceInputsEvent}
                        name="price" type="number"
                        className="input input-price" step="100" min="0"
                        placeholder={Copy.price}
                        />
                <div className="listing-input-row">
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
                </div>
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
        
    