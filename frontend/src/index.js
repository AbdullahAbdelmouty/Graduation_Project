import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
// import Header from './components/header.js';
// import Main from "./components/main.js"
import "./script/script.js"
// import Footer from "./components/footer.js"
import {BrowserRouter, Routes,Route}from "react-router-dom"
import Pay from "./pages/Pay.js"; 
import Home from './pages/Home.js';
import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='container'>
      <App/>
    </div>
  );
  
    
