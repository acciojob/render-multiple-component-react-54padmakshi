import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <h1 value ="project-name" data-ns-test >
       Name 
      </h1>
      <p value = "project-description" data-ns-test >
        Description 
      </p>
    </div>
  )
}


export default App;
