//Import React
import React, { useState } from 'react';

//Import Style
import './appBackend.scss';

//Import data
import propertiesList from 'backend/listaImmobili.json'

//Import ReusableComponents
import Header from 'components/header/header';
import Navigator from 'components/navigator/navigator';
import PanelClose from 'components/panelClose/panelClose';
import PanelOpen from 'components/panelOpen/panelOpen';
import Listing from 'components/listing/listing'

//Import Copy
import { Copy } from 'utilities/copy'

function AppBackend() {

  console.log(propertiesList)
  //Set Input Value State
  const [inputAddress, setInputAddress] = useState()
  function handleInputAddress(newInputAddress) {
    setInputAddress(newInputAddress)
  }
  const [inputHouseNumber, setInputHouseNumber] = useState()
  function handleInputHouseNumber(newInputHouseNumber) {
    setInputHouseNumber(newInputHouseNumber)
  }
  const [inputCity, setInputCity] = useState()
  function handleInputCity(newInputCity) {
    setInputCity(newInputCity)
  }
  const [inputProvince, setInputProvince] = useState()
  function handleInputProvince(newInputProvince) {
    setInputProvince(newInputProvince)
  }
  const [inputPrice, setInputPrice] = useState()
  function handleInputPrice(newInputPrice) {
    setInputPrice(newInputPrice)
  }
  const [inputRoom, setInputRoom] = useState()
  function handleInputRoom(newInputRoom) {
    setInputRoom(newInputRoom)
  }
  const [inputBathroom, setInputBathroom] = useState()
  function handleInputBathroom(newInputBathroom) {
    setInputBathroom(newInputBathroom)
  }
  const [inputDimension, setInputDimension] = useState()
  function handleInputDimension(newInputDimension) {
    setInputDimension(newInputDimension)
  }
  const [inputDescription, setInputDescription] = useState()
  function handleInputDescription(newInputDescription) {
    setInputDescription(newInputDescription)
  }
  console.log(inputAddress);

  //IDEAL: add property to propertiesList State
    //user fills up form to add property
    //user clicks 'submit property'
    //api call is made with property data as parameters
    //backend receives data from api call
    //backend validates data against requirements
    //backend adds property to properties list

  //DEMO PATH
  //modify inputs so that street number and street name are separate
  //on click, array.push(data) on propertiesList.listaImmobili

  return (
    <div className="App">
        <div className="Section-Header">
          <Header className="Section-Header"/>
          <Navigator />
        </div>
        <div className="Section-Main">
            <div className="Posting-Container">
                <Listing 
                onChangeAddress={handleInputAddress}
                onChangeHouseNumber={handleInputHouseNumber}
                onChangeCity={handleInputCity}
                onChangeProvince={handleInputProvince}
                onChangePrice={handleInputPrice}
                onChangeRoom={handleInputRoom}
                onChangeBathroom={handleInputBathroom}
                onChangeDimension={handleInputDimension}
                onChangeDescription={handleInputDescription}
                
                />
            </div>
            <div className="Panel-Container">
                <div className="Preview-Text">
                {Copy.preview}
                </div>
                <PanelClose 
                  address={inputAddress}
                  houseNumber={inputHouseNumber} 
                  city={inputCity}
                  province={inputProvince}
                  price={inputPrice}
                  room={inputRoom}
                  bathroom={inputBathroom}
                  dimension={inputDimension}
                  description={inputDescription}
                  />
                <PanelOpen 
                  address={inputAddress}
                  houseNumber={inputHouseNumber} 
                  city={inputCity}
                  province={inputProvince}
                  price={inputPrice}
                  room={inputRoom}
                  bathroom={inputBathroom}
                  dimension={inputDimension}
                  description={inputDescription}
                  />
          </div>
        </div>
    </div>
  );
}

export default AppBackend;
