import "../style/Main.css"
import plus from "../icon/plus.png"
import Table from "../comp/table/Table.jsx"
import { useContext, useState } from "react"
import { MainContextValues } from "../contexts/MainContext"

const Main = () => {
    const {row,addRow} = useContext(MainContextValues)
    return ( 
        <>
            <div className="container">
                <div className="adress">
                    <div className="ip"><h1 className="heading">IP</h1><input className="input" type="text" /></div>
                    <div className="port"><h1 className="heading">PORT</h1><input className="input" type="text" /></div>
                </div>
                <div className="adder">
                    <div className="add"><button onClick={() => addRow()} className="btn"><img src={plus} alt="" /></button></div>
                </div>
                <div className="table">
                    <div className="table__head"><h1 className="heading">TABLE</h1></div>
                    <Table row={row}/>
                </div>
                <div className="save"><button className="btn__save">SAVE</button></div>
            </div>
        </>
     );
}
 
export default Main;