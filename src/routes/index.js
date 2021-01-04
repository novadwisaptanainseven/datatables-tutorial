import React from "react";
import { Link } from "react-router-dom";

const ListTutorial = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Basic Datatable</Link>
        </li>
        <li>
          <Link to="/selectable-rows">Selectable Rows</Link>
        </li>
        <li>
          <Link to="/datatable-material-ui">DataTable Material UI</Link>
        </li>
        <li>
          <Link to="/custom-cells">Custom Cells</Link>
        </li>
        <li>
          <Link to="/expendable-rows">Expendable Rows</Link>
        </li>
        <li>
          <Link to="/datatable-with-api">Datatables with API</Link>
        </li>
      </ul>
    </>
  );
};

export default ListTutorial;
