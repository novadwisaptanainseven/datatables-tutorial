import React from "react";
import DataTable from "react-data-table-component";
import { getMovies } from "./data-dummy/movies";

const SelectableRows = () => {
  const data = getMovies();

  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Year",
      selector: "year",
      sortable: true,
    },
  ];

  const handleChange = (state) => {
    console.log("Selected Rows: ", state.selectedRows);
  };

  return (
    <div>
      <h1>Selectable Rows</h1>
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
        selectableRows // add for checkbox selection
        Clicked
        onSelectedRowsChange={handleChange}
      />
    </div>
  );
};

export default SelectableRows;
