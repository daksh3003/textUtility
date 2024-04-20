import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#141E46";
      showAlert("Dark mode has been enabled","success");
    }
  }
  return (
    <>
    <Router basename="/">
      <Navbar title="Textiser" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}>
          </Route>
          <Route exact path="/"
            element={<TextForm  showAlert = {showAlert} heading="Enter the text to be analyzed!" mode={mode}/>}>
          </Route>
        </Routes>       
      </div>
      </Router>
    </>
  );
}

export default App;
