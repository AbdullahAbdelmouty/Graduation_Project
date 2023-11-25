import '../style/style.css';
import Header from '../components/header.js';
import Main from "../components/main.js"
// import "./script/script.js"
import Footer from "../components/footer.js"
// import {BrowserRouter, Routes,Route}from "react-router-dom"

export default function Home(){
    return(
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}