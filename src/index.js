import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import "./customcss/style.css";
import ReactGA from 'react-ga'; 

 ReactGA.initialize('UA-175340939-1');
ReactDOM.render(
  <Main />, 
  document.getElementById("root")
);