import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Login/Login";
import { Register } from "./Login/Register";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";
import Home from "./Dashboard/Home";
import UseState from "./Dashboard/Hooks/UseState";
import UseEffect from "./Dashboard/Hooks/UseEffect";
import UseMemo from "./Dashboard/Hooks/UseMemo";
import UseCallback from "./Dashboard/Hooks/UseCallback";
import UseRef from "./Dashboard/Hooks/UseRef";
import UseContext from "./Dashboard/Hooks/UseContext";
import UseReducer from "./Dashboard/Hooks/UseReducer";
import ReduxModule from "./Dashboard/ReduxModule";
import ApiCall from "./Dashboard/ApiCall";
import Iq from "./Dashboard/Iq";
import Demo from './Dashboard/Demo'
const LazyLoadPage = React.lazy(() => import('./Dashboard/LazyLoadPage'))

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="redux" element={<ReduxModule />} />
          <Route path="apiCall" element={<ApiCall />} />
          <Route path="iq" element={<Iq />} />
          <Route path="demo" element={<Demo />} />

          <Route path='lazyLoadPage' element={
            <React.Suspense fallback='Loading ... '><LazyLoadPage />
            </React.Suspense>} />
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useCallback" element={<UseCallback />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useContext" element={<UseContext />} />
          <Route path="useReducer" element={<UseReducer />} />
        </Route>
      </Routes>
      <Outlet />

      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
    </div>
  );
}

export default App;
