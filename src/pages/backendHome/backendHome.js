//Import React
import React, {useState} from 'react';

//Import Style
import './backendHome.scss';

//Import ReusableComponents
import Header from 'components/header/header';
import Navigator from 'components/navigator/navigator';
import NavigatorButton from 'components/navigatorButton/navigatorButton'
import PanelClose from 'components/panelClose/panelCloseFrontend';
import FilterButtonMain from 'components/filterButtonMain/filterButtonMain';
import SearchBar from 'components/searchBar/searchBar';
import Filters from 'components/filters/filters';
import LeftIconButton from 'components/leftIconButton/leftIconButton';
import FilterButton from 'components/filterButton/filterButton'
import FilterButtonModal from 'components/filterButtonModal/filterButtonModal'
import FilterButtonSpacer from 'components/filterButtonSpacer/filterButtonSpacer'

//Import Icons
import { ReactComponent as IconFilters } from 'assets/icon/icon-filters.svg'
import { ReactComponent as IconList } from 'assets/icon/icon-list.svg'

//Import Copy
import { Copy } from 'utilities/copy'


export default function BackendHome() {

  // State
  const [isFilterHidden, setIsFilterHidden] = useState(true);
  const [isListHidden, setIsListHidden] = useState(true);
  
  const [isType1ButtonClicked, setIsType1ButtonClicked] = useState(false)
  const [isType2ButtonClicked, setIsType2ButtonClicked] = useState(false)
  const [isType3ButtonClicked, setIsType3ButtonClicked] = useState(false)
  const [isType4ButtonClicked, setIsType4ButtonClicked] = useState(false)
  
   // State Functions

   function handleFilterClick() {
    setIsFilterHidden(!isFilterHidden)
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

  return (
    <div>
        <header className="section-header">
            <Header />
            <Navigator>
                <NavigatorButton
                    class="navigator-button button-green"
                    buttonText= "Crea nuovo annuncio"
                />
                <NavigatorButton
                    class="navigator-button button-green"
                    buttonText= "Elimina annunci"
                />

                <NavigatorButton
                    class="navigator-button button-red"
                    buttonText= "Salva"
                />
            </Navigator>
            <FilterButtonMain >
                <div className="buttonfilters-content">
                    
                    <div className='filterbuttonmain-buttoncontainer'>
                    <SearchBar 
                        text="Cerca tra gli annunci"/>
                    <LeftIconButton
                        icon= {<IconFilters />}
                        buttonText={Copy.filter}
                        onButtonClick={handleFilterClick}
                        isButtonClicked = {!isFilterHidden}
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
                            class= {`navigator-button button-red ${!isFilterHidden}`}
                            buttonText= "X"
                            onButtonClick={handleFilterClick}
                            >
                                
                        </NavigatorButton>
                    </div>
                </div>

                </Filters>
            
        </header>
        <div className="section-main">
            <div className="panel-container">
            <PanelClose 
                />
            <PanelClose 
            />
            <PanelClose 
                />
            <PanelClose 
            />
            <PanelClose 
            />
            </div>
        </div>
    </div>
  );
}