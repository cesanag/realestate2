import React, {useState} from 'react';

import './style/css/AppFrontend.css';
import Header from './Header';
// import Dashboard from './Dashboard';
import SearchBar from './SearchBar';
import ButtonsFilters from './ButtonsFilters';
import Filters from './Filters';
import Map from './Map';
import PanelClose from './PanelClose';
//button icons import
import iconSearch from './icon/icon-search.svg'
import iconFilters from './icon/icon-filters.svg'
import iconMap from './icon/icon-map.svg'
import {Copy} from './Copy/Copy'
import LeftIconButton from './leftIconButton';


function AppFrontend() {
  // Filter Button
  const [isFilterHidden, setIsFilterHidden] = useState(false);
  const [toggleMap, setToggleMap] = useState(true);

  function handleFilterClick() {
    setIsFilterHidden(!isFilterHidden) 
  }
  // Map Button 
  const toggleMapClasses = `Map-Container ${toggleMap ? "is-visible" : "is-hidden"}`
    function handleMapClick() {
      setToggleMap(!toggleMap)
    }
  return (
    <div className="App">
      <div className="App-Content">
        <div className="Section-Header">
          <Header />
          <ButtonsFilters >
            <div className="buttonfilters-content">
              <SearchBar />
              <div className="buttonsfilters-buttoncontainer">
                <LeftIconButton
                  icon={iconFilters}
                  buttonText={Copy.filter}
                  onButtonClick={handleFilterClick}
                />
                <select className="buttonsfilters-button">
                    <option style={{display:'none'}} value={Copy.order}>
                        {Copy.order}
                    </option>
                    <option value="Più rilevanti">Recenti</option>
                    <option value="Ordine alfabetico">A alla Z</option>
                    <option value="Ordina per nome">Prezzo</option>
                </select>
                <LeftIconButton
                  icon={iconMap}
                  buttonText={Copy.map}
                  onButtonClick={handleMapClick}
                />
              </div>
            </div>
          </ButtonsFilters>
          {/* {<Dashboard />} */}
        </div>
        <div className="Section-Main">
            {/* <div className={toggleFilterClasses}> */}
              <Filters isFilterHidden={isFilterHidden}/>
            {/* </div>  */}
            <div className="Panel-Close-Container">
              <div className="property-found"> 148 proprietà trovate a Monza</div>
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
