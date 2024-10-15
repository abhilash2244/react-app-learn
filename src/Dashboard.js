import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './Dashboard/Home'
import 'bootstrap/dist/css/bootstrap.css';
import UseState from './Dashboard/Hooks/UseState'
import UseEffect from './Dashboard/Hooks/UseEffect'
import UseMemo from './Dashboard/Hooks/UseMemo'
import UseCallback from './Dashboard/Hooks/UseCallback'
import UseRef from './Dashboard/Hooks/UseRef'
import UseContext from './Dashboard/Hooks/UseContext'
import UseReducer from './Dashboard/Hooks/UseReducer'
import ReduxModule from './Dashboard/ReduxModule'
import LazyLoadPage from './Dashboard/LazyLoadPage'
import ApiCall from './Dashboard/ApiCall'
import Iq from './Dashboard/Iq'
import Demo from './Dashboard/Demo'
export default function Dashboard() {
    const [dropDownList, setDropDownList] = useState(false)
    return (
        <div>

            <div className="sidebar">
                <NavLink to="home" element={<Home />}>Home</NavLink>
                <NavLink to="redux" element={<ReduxModule />}>ReduxModule</NavLink>
                <NavLink to="lazyLoadPage" element={<LazyLoadPage />}>Lazy Loading</NavLink>
                <NavLink to="apiCall" element={<ApiCall />}>Api Calling</NavLink>
                <NavLink to="iq" element={<Iq />}>FAQ</NavLink>

                <button onClick={()=> setDropDownList(!dropDownList)} className="dropdown-btn">Hooks<i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-container" style={{display : dropDownList ? "block":"none"}}>
                        <NavLink to="useState" element={<UseState />}>UseState</NavLink>
                        <NavLink to="useEffect" element={<UseEffect />}>UseEffect</NavLink>
                        <NavLink to="useMemo" element={<UseMemo />}>UseMemo</NavLink>
                        <NavLink to="useCallback" element={<UseCallback />}>UseCallback</NavLink>
                        <NavLink to="useRef" element={<UseRef />}>UseRef</NavLink>
                        <NavLink to="useContext" element={<UseContext />}>UseContext</NavLink>
                        <NavLink to="useReducer" element={<UseReducer />}>UseReducer</NavLink>

                    </div>
                {/* <a href="#about">Demo</a> */}
                <NavLink to="demo" element={<Demo />}>Demo JS Samples</NavLink>

            </div>

            <div className="content">
                {/* <div className="topnav">

                    <div className="search-container">
                        <form action="/action_page.php">
                            <input style={{ background: "#f1f1f1" }} type="text" placeholder="Search.." name="search" />
                        </form>
                    </div>
                </div> */}
                <Outlet />

            </div>
            </div>
    )
}
