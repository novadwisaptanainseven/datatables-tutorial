import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
// import { getMovies } from "./data-dummy/movies";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import axios from "axios";

const DatatableWithAPI = () => {
  const [data, setData] = useState([]);
  const sortIcon = <ArrowDownward />;
  const [value, setValue] = useState("");

  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/kontak`);
    setData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      name: "Nama",
      selector: "kontak_nama",
      sortable: true,
    },
    {
      name: "No. Telp",
      selector: "kontak_telepon",
      sortable: true,
    },
    {
      name: "Aksi",
      cell: (row) => (
        <button type="button" onClick={() => handleDelete(row)}>
          Hapus
        </button>
      ),
      button: true,
    },
  ];

  const handleDelete = (data) => {
    window.confirm(`Anda yakin ingin menghapus data ${data.kontak_nama} ?`);
  };

  const handleChange = (state) => {
    console.log("Selected Rows: ", state.selectedRows);
    setValue(state.selectedRows);
  };

  const ExpandableComponent = ({ data }) => <p>{data.kontak_pesan}</p>;
  const SubHeaderComponent = () => (
    <form>
      <input type="text" name="search" placeholder="Pencarian..." />
      <button type="button">Cari</button>
    </form>
  );

  return (
    <div>
      <h1>Inbox</h1>
      <hr />
      <h3>Data Selected: </h3>
      <ul>
        {value &&
          value.map((item, index) => <li key={index}>{item.kontak_nama}</li>)}
      </ul>
      <DataTable
        subHeader={true}
        subHeaderComponent={<SubHeaderComponent />}
        title="Inbox"
        columns={columns}
        data={data}
        selectableRows // add for checkbox selection
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={{ inkdisabled: "true" }}
        sortIcon={sortIcon}
        onSelectedRowsChange={handleChange}
        expandableRows
        expandableRowsComponent={<ExpandableComponent />}
        pagination
        paginationPerPage={4}
        paginationTotalRows={data.length}
      />
    </div>
  );
};

export default DatatableWithAPI;
