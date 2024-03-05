import React from "react";
import { Provider } from "react-redux";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Form and Table Example</h1>
        <FormComponent />
        <TableComponent />
      </div>
    </Provider>
  );
};

export default App;
