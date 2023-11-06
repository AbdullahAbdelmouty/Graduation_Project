import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import Header from './components/header';
import Main from "./components/main.js"
import "./script/script.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
      <Header/>
      <Main/>
    </div>
  );

