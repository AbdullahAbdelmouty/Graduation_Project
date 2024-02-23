import Pay from "./pages/Pay"; 
import Home from './pages/Home';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Sign from "./pages/SignUp";
// import Header from "./components/header";
import Private from "./components/Private";
export default function App(){

return(
    <>
    <BrowserRouter>
        <Routes>
            <Route element={<Private/>}>
                <Route path='/pay'element={<Pay/>} />
                {/* <Route path="/header" element={<Header/>}/> */}
            </Route>
                <Route path="/" element={<Home />} />
                <Route path='/home'element={<Home/>} />
                <Route path='/sign'element={<Sign/>} />
        </Routes>
    </BrowserRouter>
    </>
)
}

