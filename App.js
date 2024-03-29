import React, { useState } from "react";
// import routes from "./routes";
import Homepage from "./components/Homepage";
import QuoteRequestForm from "./components/QuoteRequestForm";
import ServicePage from "./components/ServicePage";
import ContactForm from "./components/ContactForm";
// import QuoteRequestForm from "./components/QuoteRequestForm";
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    setLightMode(!lightMode);

  }

  const themeClass = darkMode ? lightMode ? "light-mode" : "dark-mode" : "light-mode";
  // document.body.className = themeClass;

  return (
    <>
    <div className={themeClass}style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}>
    
    <BrowserRouter basename="/SophisticatedMoves">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactForm />} /> 
          <Route path="/quote" element={<QuoteRequestForm />} />
        </Routes>
      </BrowserRouter>

      </div>
      <button className="dark-mode-button" onClick={toggleDarkMode}>Light/Dark Mode</button>
    </>
  );
}

export default App;
