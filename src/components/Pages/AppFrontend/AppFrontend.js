//Import React
import React, {useState} from 'react';

//Import Style
import './AppFrontend.scss';

//Import ReusableComponents
import Header from 'components/ReusableComponents/Header/Header';
import SearchBar from 'components/ReusableComponents/SearchBar/SearchBar';
import ButtonsFilters from 'components/ReusableComponents/ButtonsFilters/ButtonsFilters';
import Filters from 'components/ReusableComponents/Filters/Filters';
import Map from 'components/ReusableComponents/Map/Map';
import PanelClose from 'components/ReusableComponents/PanelClose/PanelClose';
import LeftIconButton from 'components/ReusableComponents/LeftIconButton/LeftIconButton';
import TypeButton from 'components/ReusableComponents/TypeButton/TypeButton'
import Slider from 'components/ReusableComponents/Slider/Slider'

//Import Icons
import iconFilters from 'components/icon/icon-filters.svg'
import iconMap from 'components/icon/icon-map.svg'

//Import Copy
import {Copy} from 'components/Copy/Copy'

function AppFrontend() {

  // ButtonsFilters State
  const [isFilterHidden, setIsFilterHidden] = useState(false);
  const [isMapHidden, seIsMapHidden] = useState(false);

  // ButtonsFilters Functions
  function handleFilterClick() {
    setIsFilterHidden(!isFilterHidden) 
  }
  function handleMapClick() {
    seIsMapHidden(!isMapHidden)
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
                <LeftIconButton
                  icon={iconMap}
                  buttonText={Copy.map}
                  onButtonClick={handleMapClick}
                />
                <select className="buttonsfilters-button">
                  <option style={{display:'none'}} value={Copy.order}>
                    {Copy.order}
                  </option>
                  <option>
                    {Copy.orderByRelevance}
                  </option>
                  <option>
                    {Copy.orderByName}
                  </option>
                  <option>
                    {Copy.orderByPrice}
                  </option>
                </select>
              </div>
            </div>
          </ButtonsFilters>
        </div>
        <div className="Section-Main">
            <Filters isFilterHidden={isFilterHidden}>
              <div className="filters-type">
                <div className="filters-name">
                    {Copy.type}
                </div>
                <TypeButton
                    buttonText={Copy.type1}
                />
                <TypeButton 
                    buttonText={Copy.type2}
                />
                <TypeButton 
                    buttonText={Copy.type3}
                />
                <TypeButton
                    buttonText={Copy.type4}
                /> 
                {/* <button className="type-button type-button-selected">
                      <div className="type-text">
                      {Copy.type3}
                      </div>
                    </button> */}
              </div>
              <Slider 
                sliderName = {Copy.price}
                sliderText = {`${Copy.currency} 10000`}
                sliderMinValue = "1000"
                sliderMaxValue = "10000000" 
            />
              <Slider 
                sliderName = {Copy.dimension}
                sliderText = {`${Copy.measure} 180`}
                sliderMinValue = "10"
                sliderMaxValue = "500" 
              />
              <Slider 
                sliderName = {Copy.rooms}
                sliderText = "2"
                sliderMinValue = "10"
                sliderMaxValue = "500" 
              />
              <Slider style={{backgroundColor:"red"}}
                sliderName = {Copy.bathrooms}
                sliderText = "1"
                sliderMinValue = "10"
                sliderMaxValue = "500" 
              />
            </Filters>
            <div className="Panel-Close-Container">
              <div className="property-found"> 
                148 {Copy.propertyResult} a {Copy.sampleCity}
              </div>
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
              <PanelClose className="Panel-Close"/>
          </div>
              <Map isMapHidden={isMapHidden}/>
        </div>
      </div>
    </div>
  );
}

export default AppFrontend;
