import "../style/Main.css";
import plus from "../icon/plus.png";
import Table from "../comp/table/Table.jsx";
import { useContext, useState, useRef, useEffect } from "react";
import { MainContextValues } from "../contexts/MainContext";
import { IMaskInput } from "react-imask";

const Main = () => {
  const { row, addRow, downloadFile, addRefAdress, xmlConvert } =
    useContext(MainContextValues);
  const ipValue = useRef();
  const portValue = useRef();

  useEffect(() => {
    addRefAdress(ipValue, portValue);
  }, []);

  return (
    <>
      <div className="container">
        <form id="form" className="adress">
          <div className="ip">
            <h1 className="heading">IP</h1>
            <IMaskInput mask='000.000.000.000' ref={ipValue} className="input" type="text" />
          </div>
          <div className="port">
            <h1 className="heading">PORT</h1>
            <IMaskInput mask='000000' ref={portValue} className="input" type="text" />
          </div>
        </form>
        <div className="adder">
          <div className="add">
            <button onClick={() => addRow()} className="btn">
              <img src={plus} alt="" />
            </button>
          </div>
        </div>
        <div className="table">
          <div className="table__head">
            <h1 className="heading">TABLE</h1>
          </div>
          <form id="form">
            <Table row={row} />
          </form>
        </div>
        <div className="save">
          <button onClick={() => downloadFile()} className="btn__save">
            SAVE JSON
          </button>
          <button onClick={() => xmlConvert()} className="btn__save">
            SAVE XML
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
