import React from 'react';

import './style/css/AppFrontend.css';
import Header from './Header';
// import Dashboard from './Dashboard';
import ButtonsFilters from './ButtonsFilters';
import Filters from './Filters';
import PanelClose from './PanelClose';

function AppFrontend() {
  return (
    <div className="App">
      <div className="App-Content">
        <div className="Section-Header">
          <Header />
          {/* {<Dashboard />} */}
        </div>
        <div className="Section-Main">
            <div className="Filters-Container">
              <Filters />
            </div> 
            <div className="Panel-Close-Container">
              <ButtonsFilters />
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFrontend;
