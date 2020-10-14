//Import React
import React, { useState } from 'react';

//Import Style
import './AppBackend.scss';

//Import data
import propertiesList from '../../../backend/listaImmobili.json'
//Import ReusableComponents
import Header from 'components/ReusableComponents/Header/Header';
import Navigator from 'components/ReusableComponents/Navigator/Navigator';
import PanelClose from 'components/ReusableComponents/PanelClose/PanelClose';
import PanelOpen from 'components/ReusableComponents/PanelOpen/PanelOpen';
import Posting from 'components/ReusableComponents/Posting/Posting'

function AppBackend() {

  
  console.log(propertiesList)
  //Set Input Value State
  const [inputAddress, setInputAddress] = useState()
  function handleInputs(newInputAddress) {
    //console.log(newInputAddress);
    setInputAddress(newInputAddress)
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
                <Posting onChange={handleInputs}/>
            </div>
            <div className="Panel-Container">
                <div className="Preview-Text">
                Anteprima
                </div>
                <PanelClose address={inputAddress} />
                <PanelOpen  address={inputAddress} />
          </div>
        </div>
    </div>
  );
}

export default AppBackend;
