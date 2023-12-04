import Pay from "./pages/Pay"; 
import Home from './pages/Home';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Sign from "./pages/SignUp";

export default function App(){

return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home'element={<Home/>} />
            <Route path='/pay'element={<Pay/>} />
            <Route path='/sign'element={<Sign/>} />
        </Routes>
    </BrowserRouter>
    </>
)
}

