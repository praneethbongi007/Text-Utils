import React, { useState } from "react";
import Alert from "./components/alert";
import Navbar from "./pages/Navbar";
import Textutils from "./pages/Textutils";
import Accordian from "./pages/accordian";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar tittle="TextUtlies" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Textutils showAlert={showAlert} mode={mode} />} />
        <Route path="/About" element={<Accordian />} />
      </Routes>
      
    </>
  );
}

export default App;
