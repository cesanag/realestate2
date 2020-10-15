//Import React
import React, {useState} from 'react';

//Import Style
import './appFrontend.scss';

//Import ReusableComponents
import Header from 'components/header/header';
import SearchBar from 'components/searchBar/searchBar';
import ButtonsFilters from 'components/buttonsFilters/buttonsFilters';
import Filters from 'components/filters/filters';
import Map from 'components/map/map';
import PanelClose from 'components/panelClose/panelClose';
import LeftIconButton from 'components/leftIconButton/leftIconButton';
import TypeButton from 'components/typeButton/typeButton'
import Slider from 'components/slider/slider'

//Import Icons
import { ReactComponent as IconFilters } from 'assets/icon/icon-filters.svg'
import { ReactComponent as IconFiltersHidden } from 'assets/icon/icon-filters-hidden.svg'
import { ReactComponent as IconMap } from 'assets/icon/icon-map.svg'
import { ReactComponent as IconMapHidden } from 'assets/icon/icon-map-hidden.svg'
import { ReactComponent as IconList } from 'assets/icon/icon-list.svg'

//Import Copy
import { Copy } from 'utilities/copy'

function AppFrontend() {

  // State
  const [isFilterHidden, setIsFilterHidden] = useState(false);
  const [isMapHidden, setIsMapHidden] = useState(false);
  const [isListHidden, setIsListHidden] = useState(true);

  const [isType1ButtonClicked, setIsType1ButtonClicked] = useState(false)
  const [isType2ButtonClicked, setIsType2ButtonClicked] = useState(false)
  const [isType3ButtonClicked, setIsType3ButtonClicked] = useState(false)
  const [isType4ButtonClicked, setIsType4ButtonClicked] = useState(false)


  // State Functions

  function handleFilterClick() {
    setIsFilterHidden(!isFilterHidden)
  }

  function handleMapClick() {
    setIsMapHidden(!isMapHidden)
  }

  function handleIsType1ButtonClicked() {
    setIsType1ButtonClicked(!isType1ButtonClicked)
  }
  //chiamare le cose ESPLICITAMENTE
  //function: handleHomeFilterClick
  //Copy: homeFilterButton, officeFilterButton
  //state: isHomeFilterEnabled setIsHomeFilterEnabled
  //se è boolean: is...
  //se è array/lista: propertyList

  // [{text: 'casa', onClickHandler: () => {}, isToggled: false},{…},{…}]
  // <typeFilters filtersState= [oggetto Sopra]>
  // array.map(filterState => <filterButton>)}

  //sistemare colors con sistema ale => usare background url() e content (placeholder)
  //backgroundImage: 'svgPath';content: '[]',::before , ::after

  
  function handleIsType2ButtonClicked() {
    setIsType2ButtonClicked(!isType2ButtonClicked)
  }
  function handleIsType3ButtonClicked() {
    setIsType3ButtonClicked(!isType3ButtonClicked)
  }
  function handleIsType4ButtonClicked() {
    setIsType4ButtonClicked(!isType4ButtonClicked)
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
                    icon= {!isFilterHidden ? <IconFiltersHidden /> : <IconFilters />}
                    buttonText={Copy.filter}
                    onButtonClick={handleFilterClick}
                    isButtonClicked = {!isFilterHidden}
                  />
                  <LeftIconButton
                    icon={!isMapHidden ? <IconMapHidden /> : <IconMap />}
                    buttonText={Copy.map}
                    onButtonClick={handleMapClick}
                    isButtonClicked = {!isMapHidden}
                  />
                  <div className="buttonsfilters-list-container"
                    onClick={() => setIsListHidden(false)}
                    onMouseEnter={() => setIsListHidden(false)}
                    onMouseLeave={() => setIsListHidden(true)}> 
                    <LeftIconButton 
                      icon={<IconList />}
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
                <div className="type-container">
                    <TypeButton
                    buttonText={Copy.type1}
                    onButtonClick={handleIsType1ButtonClicked}
                    isButtonClicked = {!isType1ButtonClicked}
                    // name: "isHomeFilterOn, isOfficeFilterOn
                    />
                    <TypeButton 
                    buttonText={Copy.type2}
                    onButtonClick={handleIsType2ButtonClicked}
                    isButtonClicked = {!isType2ButtonClicked}
                    />
                    <TypeButton 
                    buttonText={Copy.type3}
                    onButtonClick={handleIsType3ButtonClicked}
                    isButtonClicked = {!isType3ButtonClicked}
                    />
                    <TypeButton
                    buttonText={Copy.type4}
                    onButtonClick={handleIsType4ButtonClicked}
                    isButtonClicked = {!isType4ButtonClicked}
                    /> 
                </div>
               
              </div>
              <Slider 
                sliderName = {Copy.price}
                sliderText = {`10000 ${Copy.currency}`}
                sliderMinValue = "1000"
                sliderMaxValue = "10000000" 
            />
              <Slider 
                sliderName = {Copy.dimension}
                sliderText = {`180 ${Copy.measure} `}
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
    </div>
  );
}

export default AppFrontend;
