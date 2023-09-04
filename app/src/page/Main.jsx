import "../style/Main.css"
import plus from "../icon/plus.png"
import minus from "../icon/minus.png"

const Main = () => {
    return ( 
        <>
            <div className="container">
                <div className="adress">
                    <div className="ip"><h1 className="heading">IP</h1><input className="input" type="text" /></div>
                    <div className="port"><h1 className="heading">PORT</h1><input className="input" type="text" /></div>
                </div>
                <div className="adder">
                    <div className="add"><button className="btn"><img src={plus} alt="" /></button></div>
                    <div className="delete"><button className="btn"><img src={minus} alt="" /></button></div>
                </div>
            </div>
        </>
     );
}
 
export default Main;