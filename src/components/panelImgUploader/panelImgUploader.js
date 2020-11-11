import React from 'react';
import './panelImgUploader.scss';

const { useState } = React;

export default function PanelImgUploader() {
    const [showImage, setShowImage] = useState(null);

    return (
        <div className="panelImgUploaderContainer" onChange={event=>setShowImage(
            URL.createObjectURL(event.target.files[0])  
                )}>
            <input type="file" className="panelclose-selectimage" id="input" accept="image/*"
             value=""/>
             <img className="panelclose-img" id="output" alt="" src={showImage} />
        </div>
)}