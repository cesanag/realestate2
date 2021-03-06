import React from 'react';
import './imgModal.scss';

//import sample images

//import img0 from 'assets/image/img0.jpg'
//import img1 from 'assets/image/img1.jpg'
//import img2 from 'assets/image/img2.jpg'
//import img3 from 'assets/image/img3.jpg'
//import img4 from 'assets/image/img4.jpg'
//import img5 from 'assets/image/img5.jpg'

import { ReactComponent as IconClose} from 'assets/icon/icon-close.svg'

export default function imgModal(props) {

    return ( 
        <div className={`panelopen-img-modal ${props.isModalHidden && "is-hidden"}`} >
            <div className="panelopen-img-modal-content">
                <img className="panelopen-img" src="" alt="" width="30"></img>
                    <button className="panelopen-img-modal-close"
                    onClick={props.onModalClick}>
                        <IconClose /> 
                    </button>
                <div className="panelopen-img-small-container">
                    <img className="panelopen-img-small" src="" alt="" width="30"></img>
                    <img className="panelopen-img-small" src="" alt="" width="30"></img>
                    <img className="panelopen-img-small" src="" alt="" width="30"></img>
                    <img className="panelopen-img-small" src="" alt="" width="30"></img>
                    <img className="panelopen-img-small" src="" alt="" width="30"></img>
                </div>
            </div>
        </div>
    );
  }


