import React, {useContext} from 'react';
import {AppContext} from '../context';
import fonts from './fonts'

export default function FirstInput() {
    const { imageFile, setSecondInput} = useContext(AppContext);

    const handleChange = (e) => {
        setSecondInput(prevPerson => {
            return { 
              ...prevPerson, 
              [e.target.name]: e.target.value
            }
        })
      }

    return (
        <div>
            <input type="text" name="text" placeholder="Write text on image (bottom)" disabled={imageFile.imagePreviewUrl ? false : true} onChange={(e) => handleChange(e)} />

            <div className={`style-container ${imageFile.imagePreviewUrl ? 'display-flex' : 'display-none'}`}>
                <select onChange={(e) => handleChange(e)} name="fontFamily">
                    {fonts.data.map((font, index) => {
                        return (
                            <option key={index}>{font}</option>
                        )
                    })}
                </select>
                <div>
                    
                </div>
                <input type="number" placeholder="Size" name="size" onChange={(e) => handleChange(e)} />

                <div style={{position: 'relative'}}>
                    <label htmlFor="favcolor2" className="color-label">
                    <img src="/colorPicker.gif" alt="color picker" width="40px" height="30px" />
                    </label>
                    <input type="color" id="favcolor2" name="color" value="#ff0000" onChange={(e) => handleChange(e)} style={{display: 'none'}}/>
                </div>
                
            </div>
        </div>
    )
}