// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import NavBar from "./globalSubComponents/NavBar";
// Local Files

function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  return (
    <>
      {curTab === "Auth" || curTab === "TripCanny" || curTab === "Robinhood" ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
      {/* {curTab === "Auth" || curTab === "TripCanny" || curTab === "Robinhood" ? null : <Footer />} */}
    </>
  );
}

export default App;
