import { useState } from "react";
import "./Table.css";
import Tr from "./Tr";

const Table = ({ row }) => {
  return (
    <>
      <table>
        {row.map((item) => (
          <Tr key={item.id} rowData={item} />
        ))}
      </table>
    </>
  );
};

export default Table;
