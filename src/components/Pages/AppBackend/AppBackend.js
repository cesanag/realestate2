import React, { useState } from 'react';

import './AppBackend.scss';

import Header from '../../ReusableComponents/Header/Header';
// import Dashboard from './Dashboard';
import Navigator from '../../ReusableComponents/Navigator/Navigator';

import PanelClose from '../../ReusableComponents/PanelClose/PanelClose';
import PanelOpen from '../../ReusableComponents/PanelOpen/PanelOpen';
import Posting from '../../ReusableComponents/Posting/Posting'

function AppBackend() {
 
  //Input Values
  const [inputAddress, setInputAddress] = useState()
  function handleInputs(newInputAddress) {
    setInputAddress(newInputAddress)
  }

  // https://medium.com/better-programming/best-practices-for-handling-a-form-with-multiple-inputs-using-react-hooks-a0abf9207284
  
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