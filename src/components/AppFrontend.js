import React, {useState} from 'react';

import './style/css/AppFrontend.css';
import Header from './Header';
// import Dashboard from './Dashboard';
import ButtonsFilters from './ButtonsFilters';
import Filters from './Filters';
import Map from './Map';
import PanelClose from './PanelClose';

function AppFrontend() {
  // Filter Button
  const [toggleFilters, setToggleFilters] = useState(true);
  const toggleFilterClasses = `Filters-Container ${toggleFilters ? "is-visible" : "is-hidden"}`
  function handleToggleFilters() {
    setToggleFilters(!toggleFilters) 
  }
  // Map Button 
  const [toggleMap, setToggleMap] = useState(true);
  const toggleMapClasses = `Map-Container ${toggleMap ? "is-visible" : "is-hidden"}`
    function handleToggleMap() {
      setToggleMap(!toggleMap)
    }
  return (
    <div className="App">
      <div className="App-Content">
        <div className="Section-Header">
          <Header />
          {/* {<Dashboard />} */}
        </div>
        <div className="Section-Main">
          
            <div className={toggleFilterClasses}>
              <Filters />
            </div> 
            <div className="Panel-Close-Container">
              <ButtonsFilters 
                  onFilterClick={handleToggleFilters} 
                  onMapClick={handleToggleMap} />
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
               
          </div>
          <div className={toggleMapClasses}>
              <Map />
          </div>
            
        </div>
      </div>
    </div>
  );
}

export default AppFrontend;
