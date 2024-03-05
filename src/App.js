// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import store from "./store/store";
import TableComponent from "./components/TableComponent";
import FormComponent from "./components/FormComponent";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Form</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/table" element={<TableComponent />} />
            <Route path="/" element={<FormComponent />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
