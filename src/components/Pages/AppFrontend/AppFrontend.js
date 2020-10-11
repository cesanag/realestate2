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

import CookieConsent from "react-cookie-consent";

function AppFrontend() {


    
  // ButtonsFilters State
  const [isFilterHidden, setIsFilterHidden] = useState(false);

  const [isMapHidden, setIsMapHidden] = useState(false);

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
                    icon={<IconFilters fill={isFilterHidden ? Color.grey : Color.midGrey}/>}
                    buttonText={Copy.filter}
                    onButtonClick={handleFilterClick}
                    isButtonClicked = {!isFilterHidden}
                  />
                  <LeftIconButton
                    icon={<IconMap fill={isMapHidden ? Color.grey : Color.midGrey}/>}
                    buttonText={Copy.map}
                    onButtonClick={handleMapClick}
                    isButtonClicked = {!isMapHidden}
                  />
                  <div className="buttonsfilters-list-container"
                    onClick={() => setIsListHidden(false)}
                    onMouseEnter={() => setIsListHidden(false)}
                    onMouseLeave={() => setIsListHidden(true)}> 
                    <LeftIconButton 
                      icon={<IconList fill={Color.midGrey}/>}
                      buttonText={Copy.order}
                      isButtonClicked = {!isListHidden}
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
              <PanelClose />
              <PanelClose />
              <PanelClose />
              <PanelClose />
              <PanelClose />
          </div>
              <Map isMapHidden={isMapHidden}/>
        </div>
      </div>
      <CookieConsent
          enableDeclineButton flipButtons
          location="top"
          declineButtonText = "Rifiuto"
          buttonText="Accetto"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
        </CookieConsent>
      </div>
  );
}

export default AppFrontend;
