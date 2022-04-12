import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'fomantic-ui-css/semantic.css';
import reportWebVitals from './reportWebVitals';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


const scriptLink = document.createElement("script");
scriptLink.href = "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.js";
document.body.appendChild(scriptLink);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
