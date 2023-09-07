import minus from "../../icon/minus.png"
import { useState,useEffect,useRef } from "react";

const Tr = () => {
    const inputValue = useRef()

    const showInputValue = (e) =>{
        console.log(inputValue.current.value)
    }

    const [state,setState] = useState([{}])

    const addState = (e) =>{
        setState(state.map((e)=>(inputValue.current.value)))
        console.log(state)
    } 


    return ( 
        <>
        <tr>
            <td className="case"><input placeholder="key 1" className="table__input" type="text" onChange={(e) => addState()} ref={inputValue} key={0}/></td>
            <td className="case"><input placeholder="key 2" className="table__input" type="text" /></td>
            <td className="case"><input placeholder="key 3" className="table__input" type="text" /></td>
            <td className="case"><input placeholder="key 4" className="table__input" type="text" /></td>
            <td className="case"><input placeholder="key 5" className="table__input" type="text" /></td>
            <td className="case"><input placeholder="key 6" className="table__input" type="text" /></td>
            <td className="case"><input placeholder="key 7" className="table__input" type="text" /></td>
            <td className="case"><input placeholder="key 8" className="table__input" type="text" /></td>
            <td className="case"><button className="btn"><img src={minus} alt="#" /></button></td>
        </tr>
        </>
     );
}
 
export default Tr;