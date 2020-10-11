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
import { ReactComponent as IconFilters } from 'components/icon/icon-filters.svg'
import { ReactComponent as IconMap } from 'components/icon/icon-map.svg'
import { ReactComponent as IconList } from 'components/icon/icon-list.svg'

//Import Copy
import { Copy } from 'components/Copy/Copy'
import { Color } from 'components/Color/Color'

function AppFrontend() {

  // ButtonsFilters State
  const [isFilterHidden, setIsFilterHidden] = useState(true);

  const [isMapHidden, setIsMapHidden] = useState(true);

  const [isListHidden, setIsListHidden] = useState(true);

  // ButtonsFilters Functions

  function handleFilterClick() {
    setIsFilterHidden(!isFilterHidden)
  }
  function handleMapClick() {
    setIsMapHidden(!isMapHidden)
  }

  



  return (
    <div className="App">
      <div className="App-Content">
        <div className="Section-Header">
          <Header />
          <ButtonsFilters >
            <div className="buttonfilters-content">
              <SearchBar />
              <div className='buttonsfilters-buttoncontainer'>
                <LeftIconButton
                  icon={<IconFilters fill={Color.midGrey}/>}
                  buttonText={Copy.filter}
                  onButtonClick={handleFilterClick}
                  isButtonClicked = {isFilterHidden}
                />
                <LeftIconButton
                  icon={<IconMap fill={Color.midGrey}/>}
                  buttonText={Copy.map}
                  onButtonClick={handleMapClick}
                  isButtonClicked = {isMapHidden}
                />
                <div className="buttonsfilters-list-container"
                  onMouseEnter={() => setIsListHidden(false)}
                  onMouseLeave={() => setIsListHidden(true)}> 
                  <LeftIconButton 
                    icon={<IconList fill={Color.midGrey}/>}
                    buttonText={Copy.order}
                  />
                  <div className= {`buttonsfilters-list-modal ${isListHidden && "is-hidden"}`}>
                    <div className="buttonsfilters-list-text">
                     {Copy.orderByRelevance}
                    </div>
                    <div className="buttonsfilters-list-text">
                      {Copy.orderByName}
                    </div>
                    <div className="buttonsfilters-list-text">
                      {Copy.orderByPrice}
                    </div>
                  </div>
                </div>
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
