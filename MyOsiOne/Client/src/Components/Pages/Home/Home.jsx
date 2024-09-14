import React, { useState } from "react";
import Header from "../../Header/Header.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import Footer from "../../Footer/Footer.jsx";
import "./Home.css";
import Megamenu from "../Megamenu/Megamenu";
// import { SlCalender } from "react-icons/sl";
import { FaRegCalendarCheck } from "react-icons/fa";
import { NavLink} from "react-router-dom";

const Home = () => {
  const [isMegaMenu, setIsMegaMenu] = useState(false);

  return (
    <>
      {isMegaMenu ? (
        <Megamenu isMegaMenu = {isMegaMenu} setIsMegaMenu = {setIsMegaMenu} />
      ) : (
        <>
          <Header isMegaMenu={isMegaMenu} setIsMegaMenu={setIsMegaMenu} />

          <div className="home_content">
            <div>
              <Sidebar />
            </div>

            <div className="myCards shadow rounded-1">
              <div className="cards_text">
                <p className="fw-bold">My Timesheet</p>
                <button className="home_button shadow rounded-5"> <NavLink to="/timesheet" className="Nav">+ New </NavLink></button>
              </div>
              <hr />
              <div className="cards_text">
                <p>Start Date</p>
                <p>Status</p>
              </div>
              <hr />
              <div className="cards_text">
                <p>9-sep-2024</p>
                <button className="home_button shadow rounded-5 text-center">
                  Saved
                </button>
              </div>
            </div>
            <div className="myCards shadow rounded-1">
              <div className="cards_text">
                <p className="fw-bold">My Information</p>
                <button className="home_button shadow rounded-5">
                  + Apply Leave
                </button>
              </div>
              <hr />
              <div className="cards_text">
                <p>Business card</p>
                <p>View</p>
              </div>
              <div className="cards_text">
                <p>Balance PTO</p>
                <p>190.1 (Hrs)</p>
              </div>
              <div className="cards_text">
                <p>Billable Utilization</p>
                <p>100%</p>
              </div>
              <div className="cards_text">
                <p className="fw-bold">Apr-24 To Mar-25</p>
                <FaRegCalendarCheck className="calendar_Icon" />
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
