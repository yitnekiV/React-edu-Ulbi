import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";

import './styles/App.css';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/posts" element={<Posts/>}> </Route>
        <Route path="/error" element={<Error/>}> </Route>
        <Route path="*" element={<Navigate replace to="/error" />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
