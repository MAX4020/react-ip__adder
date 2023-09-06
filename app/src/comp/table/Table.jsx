import { useState } from "react";
import "./Table.css"
import Tr from "./Tr";

const Table = ({row}) => {
    return ( 
        <>
        <table>
            {row.map(() => (<Tr/>))}
        </table>
        </>
     );
}
 
export default Table;