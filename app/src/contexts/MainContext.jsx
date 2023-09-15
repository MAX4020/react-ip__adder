import { createContext } from "react";
import { useState, useRef } from "react";
import { createNewObject } from "../utils/createNewObject";
import fs from 'fs'

export const MainContextValues = createContext()
export const MainContextProvider = ({ children }) => {
    const addRefAdress = (ipValue, portValue) =>{
        refsAdress.current[0] = ipValue.current
        refsAdress.current[1] = portValue.current
    }
    const [row, setRow] = useState([createNewObject()])
    const refsAdress = useRef([])
    const refsData = useRef([])
    const addRefListener = (id, ref) =>{
        refsData. current.push({id,ref});
    }
    const deleteRefListener = (id) => {
        refsData.current = refsData.current.filter((item) => item.id !== id);
      }


    const collectRows = () => {
        let rowsData = refsData.current.map((item) => item.ref.current);
        return rowsData;
      }
    const addRow = () => {
        setRow([...row, createNewObject()])
    }
    const deleteRow = (id) => {
        setRow(row.filter((item) => item.id !== id));
    }
    const xmlConvert = () =>{
      
      const ip = refsAdress.current[0].value
      const port = refsAdress.current[1].value

      let xmlIp = `<ip>${ip}</ip>`
      let xmlPort = `<port>${port}</port>`
      let xmlKey = collectRows().reduce((acm, value, index) => {
        let keys = value.reduce((keyAcm, item, idx) => {
          keyAcm += item ? `<key${idx+1}>${item}</key${idx+1}>` : "";
          return keyAcm;
        }, "")
        acm += `<row${index+1}>${keys}</row${index+1}>`
        return acm;
      }, "")

      const xmlFile = `<xml>${xmlIp} ${xmlPort} ${xmlKey}</xml>`

      const data = new Blob(
        [
          xmlFile
        ]
      );
      const url = URL.createObjectURL(data);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `save.xml`;
      document.body.append(anchor);
      anchor.style.display = "none";
      anchor.click();
      anchor.remove();
    }
    const downloadFile = () => {
        const data = new Blob(
          [
            JSON.stringify({ip: refsAdress.current[0].value,  port: refsAdress.current[1].value, data: collectRows()}),
          ],
          { type: "application/json" }
        );
        const url = URL.createObjectURL(data);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `save.json`;
        document.body.append(anchor);
        anchor.style.display = "none";
        anchor.click();
        anchor.remove();
      };
    return (
        <MainContextValues.Provider value={{ row, addRow, deleteRow, downloadFile,addRefListener, deleteRefListener, addRefAdress, xmlConvert}}>
            {children}
        </MainContextValues.Provider>
    )
}