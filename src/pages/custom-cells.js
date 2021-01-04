import React from "react";
import DataTable from "react-data-table-component";
import { getMovies } from "./data-dummy/movies";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const CustomCells = () => {
  const data = getMovies();
  const sortIcon = <ArrowDownward />;

  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <div style={{ fontWeight: "bold" }}>{row.title}</div>
          {row.summary}
        </div>
      ),
    },
    {
      name: "Year",
      selector: "year",
      sortable: true,
      right: true,
    },
  ];

  const handleChange = (state) => {
    console.log("Selected Rows: ", state.selectedRows);
  };

  return (
    <div>
      <h1>Custom Cells</h1>
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
        selectableRows // add for checkbox selection
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={{ inkdisabled: "true" }}
        sortIcon={sortIcon}
        onSelectedRowsChange={handleChange}
      />
    </div>
  );
};

export default CustomCells;
