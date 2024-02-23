import '../style/style.css';
import Header from '../components/header.js';
import Main from "../components/main.js"
// import "./script/script.js"
import Footer from "../components/footer.js"
// import {BrowserRouter, Routes,Route}from "react-router-dom"
import login from "../images/log-idn 1.png"
import sign from "../images/user 1.png"
import malero from "../images/Untitled-10@3x@3x 1.png"
import malero2 from "../images/Arrow 1.png"
import { useNavigate } from 'react-router-dom';
export default function Home(){
    let navigate=useNavigate("");
    let txt
    if(localStorage.getItem("access-token")!==null){
        txt="Log out"
    }
    else{
        txt="Login"
    }
    return(
        <>
            <Header
                text={txt}
                image={login}
                sign="Sign Up"
                signImage={sign}
            />
            <Main
                logo={malero}
                logo2={malero2}
            />
            <Footer/>
        </>
    )
}