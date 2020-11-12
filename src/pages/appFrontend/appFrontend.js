//Import React
import React, {useState} from 'react';

//Import Style
import './appFrontend.scss';

//Import ReusableComponents
import Header from 'components/header/header';
import Map from 'components/map/map';
import PanelClose from 'components/panelClose/panelCloseFrontend';
import NavigatorButton from 'components/navigatorButton/navigatorButton'
import FilterButtonMain from 'components/filterButtonMain/filterButtonMain';
import SearchBar from 'components/searchBar/searchBar';
import LeftIconButton from 'components/leftIconButton/leftIconButton';
import Filters from 'components/filters/filters';
import FilterButton from 'components/filterButton/filterButton'
import FilterButtonModal from 'components/filterButtonModal/filterButtonModal'
import FilterButtonSpacer from 'components/filterButtonSpacer/filterButtonSpacer'

//import Slider from 'components/slider/slider'

//Import Icons
import { ReactComponent as IconFilters } from 'assets/icon/icon-filters.svg'
import { ReactComponent as IconMap } from 'assets/icon/icon-map.svg'
import { ReactComponent as IconList } from 'assets/icon/icon-list.svg'

//Import Copy
import { Copy } from 'utilities/copy'

export default function AppFrontend() {

  // State
  const [isFilterHidden, setIsFilterHidden] = useState(true);
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
  
  function handleIsType2ButtonClicked() {
    setIsType2ButtonClicked(!isType2ButtonClicked)
  }
  function handleIsType3ButtonClicked() {
    setIsType3ButtonClicked(!isType3ButtonClicked)
  }
  function handleIsType4ButtonClicked() {
    setIsType4ButtonClicked(!isType4ButtonClicked)
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


  
  return (
    <div>
      <header className="section-header">
        <Header />
        <FilterButtonMain >
          <div className="buttonfilters-content">
            
            <div className='filterbuttonmain-buttoncontainer'>
              <SearchBar 
                text={Copy.search + " " + Copy.company + "..."}
                />
              <LeftIconButton
                icon= {<IconFilters />}
                buttonText={Copy.filter}
                onButtonClick={handleFilterClick}
                isButtonClicked = {!isFilterHidden}
              />
              <LeftIconButton
                icon={<IconMap />}
                buttonText={Copy.map}
                onButtonClick={handleMapClick}
                isButtonClicked = {!isMapHidden}
              />
              <div className="filterbuttonmain-list-container"
                // onClick={() => setIsListHidden(false)}
                onMouseEnter={() => setIsListHidden(false)}
                onMouseLeave={() => setIsListHidden(true)}> 
                <LeftIconButton 
                  icon={<IconList />}
                  buttonText={Copy.order}
                  // isButtonClicked = {!isListHidden}
                />
                
                <div className= {`filterbuttonmain-list-modal ${isListHidden && "is-hidden"}`}>
                  <div className="filterbuttonmain-list-text">
                  {Copy.orderByRelevance}
                  </div>
                  <div className="filterbuttonmain-list-text">
                    {Copy.orderByName}
                  </div>
                  <div className="filterbuttonmain-list-text">
                    {Copy.orderByPrice}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </FilterButtonMain>
        <Filters isFilterHidden={isFilterHidden}>
          <div className="filters-type">
              <div className="filterbutton-container">
                {/*}
                <div className="filters-name">
                {Copy.type}
                </div>
                */}
                <FilterButton
                buttonText={Copy.type1}
                onButtonClick={handleIsType1ButtonClicked}
                isButtonClicked = {!isType1ButtonClicked}
                // name: "isHomeFilterOn, isOfficeFilterOn
                />
                <FilterButton 
                buttonText={Copy.type2}
                onButtonClick={handleIsType2ButtonClicked}
                isButtonClicked = {!isType2ButtonClicked}
                />
                <FilterButton 
                buttonText={Copy.type3}
                onButtonClick={handleIsType3ButtonClicked}
                isButtonClicked = {!isType3ButtonClicked}
                />
                <FilterButton
                buttonText={Copy.type4}
                onButtonClick={handleIsType4ButtonClicked}
                isButtonClicked = {!isType4ButtonClicked}
                />
                <FilterButtonSpacer 
                />
                <FilterButtonModal
                buttonText={Copy.price}
                />
                <FilterButtonModal
                buttonText={Copy.dimension}
                />
                <FilterButtonModal
                buttonText={Copy.rooms}
                />
                <FilterButtonModal
                buttonText={Copy.bathrooms}
                />
                <NavigatorButton
                    class="navigator-button button-green"
                    buttonText= "Applica">
                </NavigatorButton>
                <NavigatorButton
                    class="navigator-button button-red"
                    buttonText= "Chiudi">
                </NavigatorButton>
              </div>
          </div>

        </Filters>
      </header>

        <div className="section-main">
          <div className="panel-container">
            <PanelClose />
            <PanelClose />
            <PanelClose />
            <PanelClose />
            <PanelClose />
          </div>
          <div className="map-container">
            <Map isMapHidden={isMapHidden}/>
            {/* <MapContainer center={[45.5845, 9.2744]} zoom={17} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[45.5845, 9.2744]}>
              </Marker>
            </MapContainer> */}
          </div>

          
        </div>
    </div>
    
  );
  
}