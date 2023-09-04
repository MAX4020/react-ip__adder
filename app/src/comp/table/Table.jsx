import "./Table.css"

const Table = () => {
    return ( 
        <>
        <table>
            <tr>
                <td className="case"><input placeholder="key 1" className="table__input" type="text" /></td>
                <td className="case"><input placeholder="key 2" className="table__input" type="text" /></td>
                <td className="case"><input placeholder="key 3" className="table__input" type="text" /></td>
                <td className="case"><input placeholder="key 4" className="table__input" type="text" /></td>
                <td className="case"><input placeholder="key 5" className="table__input" type="text" /></td>
                <td className="case"><input placeholder="key 6" className="table__input" type="text" /></td>
                <td className="case"><input placeholder="key 7" className="table__input" type="text" /></td>
                <td className="case"><input placeholder="key 8" className="table__input" type="text" /></td>
            </tr>
        </table>
        </>
     );
}
 
export default Table;