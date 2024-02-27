// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";

// Local Files



function App() {
  
  return (
    <>
      <div >
        
        
        <Routes>
          
          <Route path="/" element={<Home/>}  />
         
        </Routes>
      </div>
      
    </>
  );
}

export default App;
