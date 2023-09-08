import { createContext } from "react";
import { useState } from "react";
import { createNewObject } from "../utils/createNewObject";

export const MainContextValues = createContext()
export const MainContextProvider = ({ children }) => {
    const [row, setRow] = useState([createNewObject()])
    const addRow = () => {
        setRow([...row, createNewObject()])
    }
    const deleteRow = (id) => {
        setRow(row.filter((item) => item.id !== id));
    }
    return (
        <MainContextValues.Provider value={{ row, addRow, deleteRow }}>
            {children}
        </MainContextValues.Provider>
    )
}