import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { getMovies } from "./data-dummy/movies";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const ExpendableRows = () => {
  const data = getMovies();
  const sortIcon = <ArrowDownward />;
  const [value, setValue] = useState("");

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
    setValue(state.selectedRows);
  };

  const ExpandableComponent = ({ data }) => (
    <img width={100} src={data.image} alt="img" />
  );

  return (
    <div>
      <h3>Data Selected: </h3>
      <ul>
        {value && value.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
      <h1>Expandable Rows</h1>
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
        selectableRows // add for checkbox selection
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={{ inkdisabled: "true" }}
        sortIcon={sortIcon}
        onSelectedRowsChange={handleChange}
        expandableRows
        expendableRowDisabled={(row) => row.expanderDisabled}
        expandableRowsComponent={<ExpandableComponent />}
      />
    </div>
  );
};

export default ExpendableRows;
