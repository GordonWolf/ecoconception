import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Opdn from './opdn'
import Navbar from './navbar'
import Carrousel from './Carrousel'
import Lechef from './lechef';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import NosPat from './nospat'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Carrousel/>
    <Lechef/>
    <NosPat/>
    <Opdn/>
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
