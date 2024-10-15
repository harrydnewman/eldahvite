// import './App.css'
// import Photo from "./components/Photo"

// function App() {
//   return (<> <Photo/> </>)
  
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}
