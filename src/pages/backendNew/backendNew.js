//Import React
import React, { useState } from 'react';

//Import Style
import './backendNew.scss';

//Import ReusableComponents
import Header from 'components/header/header';
import Navigator from 'components/navigator/navigator';
import NavigatorButton from 'components/navigatorButton/navigatorButton'
import PanelClose from 'components/panelClose/panelCloseBackend';
import PanelOpen from 'components/panelOpen/panelOpen';
import Listing from 'components/listing/listing'
import ImgModal from 'components/imgModal/imgModal'

//Import Icon
import { ReactComponent as IconLeftArrow } from 'assets/icon/icon-arrowleft.svg'

//Import Copy

export default function BackendNew() {

  //Set Modal State
  const [isModalHidden, setIsModalHidden] = useState(true);
  function handleModalClick() {
    setIsModalHidden(!isModalHidden)
  }
  //Set Input Value State
  const [inputAddress, setInputAddress] = useState()
  function handleInputAddress(newInputAddress) {
    setInputAddress(newInputAddress)
  }
  const [inputHouseNumber, setInputHouseNumber] = useState()
  function handleInputHouseNumber(newInputHouseNumber) {
    setInputHouseNumber(newInputHouseNumber)
  }
  const [inputZip, setInputZip] = useState()
  function handleInputZip(newInputZip) {
    setInputZip(newInputZip)
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
    <div>
        <ImgModal 
          isModalHidden={isModalHidden} 
          onModalClick={handleModalClick}/>
        <div className="section-header">
          <Header />
          <Navigator>
            <NavigatorButton
                  class="navigator-button button-green"
                  icon={<IconLeftArrow/>}
                  buttonText= "Indietro"
              />
              <NavigatorButton
                  class="navigator-button button-red"
                  buttonText= "Salva"
              />
          </Navigator>
          
        </div>
        <div className="section-main">
              <div className="listing-container">
                <Listing 
                  onChangeAddress={handleInputAddress}
                  onChangeHouseNumber={handleInputHouseNumber}
                  onChangeCity={handleInputCity}
                  onChangeZip={handleInputZip}
                  onChangeProvince={handleInputProvince}
                  onChangePrice={handleInputPrice}
                  onChangeRoom={handleInputRoom}
                  onChangeBathroom={handleInputBathroom}
                  onChangeDimension={handleInputDimension}
                  onChangeDescription={handleInputDescription}
                />
              </div>  
              <div className="panel-container">
                <PanelClose 
                  address={inputAddress}
                  houseNumber={inputHouseNumber}
                  zip={inputZip}
                  city={inputCity}
                  province={inputProvince}
                  price={inputPrice}
                  room={inputRoom}
                  bathroom={inputBathroom}
                  dimension={inputDimension}
                  description={inputDescription}
                  onModalClick={handleModalClick}
                  />
                <PanelOpen 
                  address={inputAddress}
                  houseNumber={inputHouseNumber}
                  zip={inputZip}
                  city={inputCity}
                  province={inputProvince}
                  price={inputPrice}
                  room={inputRoom}
                  bathroom={inputBathroom}
                  dimension={inputDimension}
                  description={inputDescription}
                  onModalClick={handleModalClick}
                  />
                </div>
        </div>
    </div>
  );
}