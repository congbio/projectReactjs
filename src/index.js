import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FillInfromation from './Component/Fill/FillInfromation';
import Showroom from './Component/room/showroom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <FillInfromation/>
    {/*  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
