import Pay from "./pages/Pay"; 
import Home from './pages/Home';
import {BrowserRouter, Routes,Route} from "react-router-dom"

export default function App(){

return(
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home'element={<Home/>} />
            <Route path='/pay'element={<Pay/>} />
        </Routes>
    </BrowserRouter>
    </>
)
}

