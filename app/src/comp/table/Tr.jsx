import { MainContextValues } from "../../contexts/MainContext";
import minus from "../../icon/minus.png";
import { useState, useEffect, useRef, useContext } from "react";

const Tr = ({ rowData }) => {
  const { deleteRow, addRefListener, deleteRefListener } =
    useContext(MainContextValues);

  const [state, setState] = useState(["", "", "", "", "", "", "", ""]);
  const refValue = useRef(["", "", "", "", "", "", "", ""]);

  const addState = (e, key) => {
    let k = [...state];
    k[key] = e.target.value;
    refValue.current = k;
    setState(k);
    console.log(k);
  };
  useEffect(() => {
    addRefListener(rowData.id, refValue);
    return () => {
      deleteRefListener(rowData.id);
    };
  }, []);
  return (
    <>
      <tr>
        <td className="case">
          <input
            placeholder="key 1"
            className="table__input"
            type="text"
            onChange={(e) => addState(e, 0)}
            value={state[0]}
          />
        </td>
        <td className="case">
          <input
            placeholder="key 2"
            className="table__input"
            type="text"
            onChange={(e) => addState(e, 1)}
            value={state[1]}
          />
        </td>
        <td className="case">
          <input
            placeholder="key 3"
            className="table__input"
            type="text"
            onChange={(e) => addState(e, 2)}
            value={state[2]}
          />
        </td>
        <td className="case">
          <input
            placeholder="key 4"
            className="table__input"
            type="text"
            onChange={(e) => addState(e, 3)}
            value={state[3]}
          />
        </td>
        <td className="case">
          <input
            placeholder="key 5"
            className="table__input"
            type="text"
            onChange={(e) => addState(e, 4)}
            value={state[4]}
          />
        </td>
        <td className="case">
          <input
            placeholder="key 6"
            className="table__input"
            type="text"
            onChange={(e) => addState(e, 5)}
            value={state[5]}
          />
        </td>
        <td className="case">
          <input
            placeholder="key 7"
            className="table__input"
            type="text"
            onChange={(e) => addState(e, 6)}
            value={state[6]}
          />
        </td>
        <td className="case">
          <input
            placeholder="key 8"
            className="table__input"
            type="text"
            onChange={(e) => addState(e, 7)}
            value={state[7]}
          />
        </td>
        <td className="case">
          <button className="btn" onClick={() => deleteRow(rowData.id)}>
            <img src={minus} alt="#" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Tr;
