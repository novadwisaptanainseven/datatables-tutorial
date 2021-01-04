import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CustomCells from "./pages/custom-cells";
import DataTableMaterialUi from "./pages/datatable-material-ui";
import DataTablesExample from "./pages/datatables-example";
import SelectableRows from "./pages/select-table-rows";
import ExpendableRows from "./pages/expandable-rows";
import ListTutorial from "./routes";
import DatatableWithAPI from "./pages/datatable-with-api";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <ListTutorial />
          <Switch>
            <Route exact path="/" component={DataTablesExample} />
            <Route path="/selectable-rows" component={SelectableRows} />
            <Route
              path="/datatable-material-ui"
              component={DataTableMaterialUi}
            />
            <Route path="/custom-cells" component={CustomCells} />
            <Route path="/expendable-rows" component={ExpendableRows} />
            <Route path="/datatable-with-api" component={DatatableWithAPI} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
