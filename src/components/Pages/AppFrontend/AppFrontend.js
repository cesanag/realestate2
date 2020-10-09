import React, {useState} from 'react';

import './AppFrontend.scss';
import Header from '../../ReusableComponents/Header/Header';
// import Dashboard from './Dashboard';
import SearchBar from 'components/ReusableComponents/SearchBar/SearchBar';
import ButtonsFilters from 'components/ReusableComponents/ButtonsFilters/ButtonsFilters';
import Filters from 'components/ReusableComponents/Filters/Filters';
import Map from 'components/ReusableComponents/Map/Map';
import PanelClose from 'components/ReusableComponents/PanelClose/PanelClose';
//button icons import
import iconFilters from 'components/icon/icon-filters.svg'
import iconMap from 'components/icon/icon-map.svg'
import {Copy} from 'components/Copy/Copy'
import LeftIconButton from 'components/ReusableComponents/leftIconButton/leftIconButton';


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
