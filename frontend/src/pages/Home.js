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
export default function Home(){
    return(
        <>
            <Header
                text="Log in"
                image={login}
                sign="Sign in"
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