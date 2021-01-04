import React from "react";
import DataTable from "react-data-table-component";
import { getMovies } from "./data-dummy/movies";

const DataTablesExample = () => {
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

  return (
    <div>
      <h1>Basic Datatable</h1>
      <DataTable title="Arnold Movies" columns={columns} data={data} />
    </div>
  );
};

export default DataTablesExample;
