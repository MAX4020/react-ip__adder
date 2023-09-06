import { createContext } from "react";
import { useState } from "react";

export const MainContextValues = createContext()
export const MainContextProvider = ({children}) => {
    const [row,setRow] = useState([{}])
    const addRow = () =>{
        setRow([...row,{}])
        console.log([row])
    }
    return(
        <MainContextValues.Provider value={{row,addRow}}>
            {children}
        </MainContextValues.Provider>
    )
}