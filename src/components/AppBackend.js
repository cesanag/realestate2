import React, {useState} from 'react';

import './style/css/AppBackend.css';

import Header from './Header';
//import Dashboard from './Dashboard';
import PanelClose from './PanelClose';
import PanelOpen from './PanelOpen';
import Posting from './Posting'

function AppBackend() {
  const [address, setAddress] = useState('')
  function handleAddress(newAddress) {
    setAddress(newAddress)
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
                <Posting onChange={handleAddress}/>
            </div>
            <div className="Panel-Container">
                <div className="Preview-Text">
                Anteprima
                </div>
                <PanelOpen address={address} />
                <PanelClose address={address}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBackend;
