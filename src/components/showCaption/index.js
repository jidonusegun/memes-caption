import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
import React, { useContext, useRef, forwardRef } from 'react';
import { AppContext } from '../context';

export default function ShowCaption() {
    const {imageFile, firstInput, secondInput} = useContext(AppContext);
    const componentRef = useRef();
    const fileName = 'meme-caption'

    const ShowImage = forwardRef((props, ref) => (
        <div className="show-caption" ref={ref}>
            <p className="top" style={{fontFamily: `${firstInput.fontFamily} !important`, color: firstInput.color, fontSize: `${firstInput.size}px`}}>{firstInput.text}</p>

            <img src={imageFile.imagePreviewUrl} alt="upload"  width="100%" height="auto" />

            <p style={{fontFamily: secondInput.fontFamily, color: secondInput.color, fontSize: `${secondInput.size}px`}} className="bottom">{secondInput.text}</p>
        </div>
    ));

    return (
        <>
            {imageFile.imagePreviewUrl ?
                <>
                    <ShowImage ref={componentRef} />
                </>
                :
                <div className="empty-caption"></div>
            }

            <div className="export-container">
                <button onClick={() => exportComponentAsJPEG(componentRef, {fileName})}>
                    Export As JPEG
                </button>

                <button onClick={() => exportComponentAsPNG(componentRef, {fileName})}>
                    Export As PNG
                </button>
            </div> 
        </>
    )
}