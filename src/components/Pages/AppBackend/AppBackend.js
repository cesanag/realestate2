//Import React
import React, { useState } from 'react';

//Import Style
import './AppBackend.scss';

//Import ReusableComponents
import Header from 'components//ReusableComponents/Header/Header';
import Navigator from 'components//ReusableComponents/Navigator/Navigator';
import PanelClose from 'components//ReusableComponents/PanelClose/PanelClose';
import PanelOpen from 'components//ReusableComponents/PanelOpen/PanelOpen';
import Posting from 'components//ReusableComponents/Posting/Posting'

function AppBackend() {

  //Set Input Value State
  const [inputAddress, setInputAddress] = useState()
  function handleInputs(newInputAddress) {
    setInputAddress(newInputAddress)
  }

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
