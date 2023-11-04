import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NavbarMain from "./components/NavbarMain.jsx";
import {useState} from "react";


function App() {
    const [show, setResult] = useState(false)

    return (
        <div>
            <NavbarMain/>

        </div>
    )
}

export default App
