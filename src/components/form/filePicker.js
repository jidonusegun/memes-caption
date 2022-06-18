import React, {useContext} from 'react';
import { AppContext } from '../context';

export default function FilePicker() {

    const { setImageFile } = useContext(AppContext);

    const handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          setImageFile({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file)
      }
      
    return (
        <div className="form-container">
            <label htmlFor="picker" className="file-picker">
                Select File
            </label>
            <input type="file" id='picker' accept="image/*" style={{display:"none"}} onChange={(e) => handleImageChange(e)}  />
        </div>
    )
}