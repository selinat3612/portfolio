import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./pages/aboutMe";
import Projects from "./pages/projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <style>{'body {background-color: #FFF2F2; padding: 20px; padding-left:40px;}'}</style>
      <Router>
            <Navbar />
            <Routes>
                <Route path="/aboutMe" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    <h1 id="heading1">HCI STUDENT</h1>
    <h1 id="heading2">@WORCESTER POLYTECHNIC INSTITUTE <br/> B.S. IN HCI</h1>
    <h1 id="heading">BOSTON, MA</h1>
  </div>
  );
}

export default App;
