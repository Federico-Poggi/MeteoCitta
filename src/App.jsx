import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Pippo from "./components/Nav2.jsx";
import SubNav from "./components/SubNav.jsx";
import {BrowserRouter} from "react-router-dom";
import {useState} from "react";

// import CityInfo from "./components/CityInfo.jsx";


function App() {
    return (
        <BrowserRouter>
            <div className={"d-flex flex-column"}>
                <Pippo/>
                <SubNav/>

            </div>
        </BrowserRouter>
    )
}

export default App
