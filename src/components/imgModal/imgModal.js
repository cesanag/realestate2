import React from 'react';
import './imgModal.scss';

import image from '../panelClose/imageSample.jpg'
import { ReactComponent as IconClose} from 'assets/icon/icon-close.svg'

function imgModal(props) {

    return ( 
        <div className={`panelopen-img-modal ${props.isModalHidden && "is-hidden"}`} >
            <div className="panelopen-img-modal-content">
             <img className="panelopen-img" src={image} alt="" width="30" ></img>
             <button className="panelopen-img-modal-close"
             onClick={props.onModalClick}>
                <IconClose /> 
            </button>
            </div>
        </div>
    );
  }

  export default imgModal;


