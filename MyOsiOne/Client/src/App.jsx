import React from "react";
import Login from "./Components/Pages/Login/Login.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home/Home.jsx";
import TimeSheet from "./Components/Pages/TimeSheet/TimeSheet.jsx";
// import Megamenu from "./Components/Megamenu/Megamenu.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/timesheet" element={<TimeSheet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
