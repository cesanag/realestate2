import React from 'react';
import './listing.scss';
import {Copy} from 'utilities/copy'

export default function Listing(props) {

    function handleAddressInputsEvent (event) {
        props.onChangeAddress(event.target.value)
        event.target.style.backgroundColor="white"
    }

    function handleHouseNumberInputsEvent (event) {
        props.onChangeHouseNumber(event.target.value)
        event.target.style.backgroundColor="white"
    }
    function handleZipInputsEvent (event) {
        props.onChangeZip(event.target.value)
        event.target.style.backgroundColor="white"
    }
    function handleCityInputsEvent (event) {
        props.onChangeCity(event.target.value)
        event.target.style.backgroundColor="white"
    }
    function handleProvinceInputsEvent (event) {
        props.onChangeProvince(event.target.value)
        event.target.style.backgroundColor="white"
    }
    function handlePriceInputsEvent (event) {
        props.onChangePrice(event.target.value)
        event.target.style.backgroundColor="white"
    }
    function handleRoomInputsEvent (event) {
        props.onChangeRoom(event.target.value)
        event.target.style.backgroundColor="white"
    }
    function handleBathroomInputsEvent (event) {
        props.onChangeBathroom(event.target.value)
        event.target.style.backgroundColor="white"
    }
    function handleDimensionInputsEvent (event) {
        props.onChangeDimension(event.target.value)
        event.target.style.backgroundColor="white"
    }
    function handleDescriptionInputsEvent (event) {
        props.onChangeDescription(event.target.value)
        event.target.style.backgroundColor="white"
    }

    return (
        <div className="listing-container">
            {/* <div className="listing-name">
                {Copy.newPost}
            </div> */}
            <form>
            <div className="listing-input">
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
                    <input 
                        onChange={handleZipInputsEvent}
                        name="zip" type="number" 
                        className="input input-city"
                        placeholder={Copy.zip}
                        />
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
                    <input
                        onChange={handlePriceInputsEvent}
                        name="price" type="number"
                        className="input input-price" step="100" min="0"
                        placeholder={Copy.price}
                        />
                    <input
                        onChange={handleDimensionInputsEvent}
                        name="dimension"
                        type="number" 
                        className="input input-dimension" step="10"min="0" max="1000"
                        placeholder={Copy.dimension}/>
                    <input
                        onChange={handleRoomInputsEvent}
                        name="rooms" type="number" 
                        className="input input-rooms" min="0" max="100"
                        placeholder={Copy.rooms}/>
                    <input
                        onChange={handleBathroomInputsEvent}
                        name="bathrooms"
                        type="number" 
                        className="input input-bathrooms" min="0" 
                        placeholder={Copy.bathrooms}/>
                <input
                    onChange={handleDescriptionInputsEvent}
                    name="textarea" id="" cols="30" rows="5" max="100"
                    className="input input-description"
                    placeholder={Copy.description}>
                </input>
            </div>
            </form>
        </div>   
    )
  }
        
    