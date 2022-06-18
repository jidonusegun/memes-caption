import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

export default function Context({children}) {
    const [imageFile, setImageFile] = useState({file: '', imagePreviewUrl: ''});
    const [firstInput, setFirstInput] = useState({text: '', fontFamily: '', color: '', size: ''});
    const [secondInput, setSecondInput] = useState({text: '', fontFamily: '', color: '', size: ''});

    return (
        <AppContext.Provider value={{imageFile, setImageFile, firstInput, setFirstInput, secondInput, setSecondInput}}>
            {children}
        </AppContext.Provider>
    )
}