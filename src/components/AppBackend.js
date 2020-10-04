import React, {useState} from 'react';

import './style/css/AppBackend.css';

import Header from './Header';
//import Dashboard from './Dashboard';
import PanelClose from './PanelClose';
import PanelOpen from './PanelOpen';
import Posting from './Posting'

function AppBackend() {
  //Input Values
  const [inputAddress, setInputAddress] = useState()
  function handleInputs(newInputAddress) {
    setInputAddress(newInputAddress)
  }
  return (
    <div className="App">
      <div className="App-Content">
        <div className="Section-Header">
          <Header />
          {/*<Dashboard />*/}
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
                <PanelOpen  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBackend;
