import React from 'react';

import './style/css/AppBackend.css';
import Header from './Header';
//import Dashboard from './Dashboard';
import PanelClose from './PanelClose';
import PanelOpen from './PanelOpen';
import Posting from './Posting'

function App() {
  return (
    <div className="App">
      <div className="App-Content">
        <div className="Section-Header">
          <Header />
          {/*<Dashboard />*/}
        </div>
        <div className="Section-Main">
            <div className="Posting-Container">
                <Posting />
            </div>
            <div className="Panel-Container">
                <div className="Preview-Text">
                Anteprima
                </div>
                <PanelOpen />
                <PanelClose />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
