import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  // let Component
  //     switch (window.location.pathname) {
  //       case "/":
  //         Component = Home
  //         break
  //       case "/about":
  //         Component = About
  //         break
  //       case "/projects":
  //         Component = Projects
  //         break
  //     }
  return (
    <div className="App">
      <style>{'body {background-color: #FFFCF5; padding: 20px; padding-left:40px;}'}</style>
      <Navbar></Navbar>
      {/* <Component /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  </div>
  );
}

export default App;
