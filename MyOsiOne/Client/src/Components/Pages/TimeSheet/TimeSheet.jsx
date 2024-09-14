import React, { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Sidebar from "../../Sidebar/Sidebar";
import "./Timesheet.css";
import { FcComments } from "react-icons/fc";

const TimeSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTask , setIsOpenTask] = useState(false);
  const [isOpenShift, setIsOpenShift] = useState(false);
  const [isOpenBillType, setIsOpenBillType] = useState(false);

  const handleClickProject = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
    setIsOpenShift(false);
    setIsOpenTask(false);
    setIsOpenBillType(false);
  
  };
  
  const handleClickTask =()=>{
    setIsOpen(false);
    setIsOpenTask(!isOpenTask);
    setIsOpenShift(false);
    setIsOpenBillType(false);
  }
  const handleClickShift =()=>{
    setIsOpen(false);
    setIsOpenTask(false);
    setIsOpenShift(!isOpenShift);
    setIsOpenBillType(false);

  }
  const handleClickBillType = ()=>{

    setIsOpen(false);
    setIsOpenTask(false);
    setIsOpenShift(false);
    setIsOpenBillType(!isOpenBillType);

  }
  return (
    <>
      <Header />
      <div className="main_Content">
        <Sidebar />
        <div className="content">
          <p className="title shadow ">Dashboard / Timesheet Submission </p>
          <div>
            <div>
              <h4>Submit TimeSheet</h4>
            </div>
            <hr />
            <div className="date_btn">
              <div className="date">Sep 09-15</div>
                <button className=" New_Timesheet_btn">
                  + New
                </button>
            </div>
          </div>
          <hr />
          <div className="Project_Detail">
            <h6 className="FirstTitle">Project</h6>
            <h6>Task</h6>
            <h6>Shift</h6>
            <h6>Bill Type</h6>
            <h6>
              Mon <br /> 09
            </h6>
            <h6>
              Tue <br /> 10
            </h6>
            <h6>
              Wed <br /> 11
            </h6>
            <h6>
              Thu <br /> 12
            </h6>
            <h6>
              Fri <br /> 13
            </h6>
            <h6>
              Sat <br /> 14
            </h6>
            <h6>
              Sun <br /> 15
            </h6>
            <h6 className="LastTitle">
              Total <br /> Hours
            </h6>
          </div>
          <div>
          <div className="Project_Inputs">
            <hr />
            <div className="TimeSheet_input">
              <button
                onClick={handleClickProject}
              >
                Select
              </button>
              {isOpen ? (
                <ul className="shadow Project_drop_Down ">
                  <li>OSI_Holiday</li>
                  <li>OSI_Paid Time Off</li>
                  <li>OSI_Practice</li>
                  <li>OSI_Training</li>
                  <li>OSIIndia_Human Resource (Only for expenses)</li>
                  <li>OSIIndia_Training (Only for expenses)</li>
                  <li>Special Leaves</li>
                </ul>
              ) : (
                <></>
              )}
            </div>
            <div className="TimeSheet_input_Task">
              <button onClick={handleClickTask}>Select</button>
              {isOpenTask ?
               <ul className="shadow Project_drop_Down">
                <li>Budget Expenses Only</li>
                <li>Corporate/Corporate expenses</li>
                <li>Expense Only</li>
                <li>Free Time</li>
                <li>Meeting</li>
                <li>POC</li>
                <li>Practice Build</li>
                <li>Shadow</li>
              </ul>: <></>}
            </div>
            <div className="TimeSheet_input_Shift">
              <button onClick={handleClickShift}> Select </button>
              {isOpenShift ?
              (<>
                <ul className="shadow Project_drop_Down">
                  <li>Select</li>
                  <li>General Shift</li>
                </ul>
              </>)
               :
                <></>}

            </div>
            <div className="TimeSheet_input_BillType">
              <button onClick={handleClickBillType}>Select</button>
              {
                isOpenBillType ? 
                (<>
                <ul className="shadow Project_drop_Down">
                  <li>Select</li>
                  <li>Internal</li>
                </ul>
                </>)

              : <></>}
            </div>
            <div className="Input_Dates_Div">
              <div className="input_Date_with_Icon">
               <input className="input_Dates" type="text" />
               <FcComments className="Comment_Icon"/>
               </div>
               <div className="input_Date_with_Icon">
               <input className="input_Dates" type="text" />
               <FcComments className="Comment_Icon" />
               </div>
               <div className="input_Date_with_Icon">
               <input className="input_Dates" type="text" />
               <FcComments className="Comment_Icon" />
               </div>
               <div className="input_Date_with_Icon">
               <input className="input_Dates" type="text" />
               <FcComments className="Comment_Icon" />
               </div>
               <div className="input_Date_with_Icon">
               <input className="input_Dates" type="text" />
               <FcComments className="Comment_Icon" />
               </div>
               <div className="input_Date_with_Icon">
               <input className="input_Dates" type="text" />
               <FcComments className="Comment_Icon" />
               </div>
               <div className="input_Date_with_Icon">
               <input className="input_Dates" type="text" />
               <FcComments className="Comment_Icon" />
               </div>
               <div className="totalHours"><h6>8</h6></div>
               
            </div>
            </div>
          </div>
          <div className="Total">
            <div className="Total_First_Element">Total Hours</div>
            <span className="Total_Rest_Elements">1</span>
            <span className="Total_Rest_Elements">2</span>
            <span className="Total_Rest_Elements">3</span>
            <span className="Total_Rest_Elements">4</span>
            <span className="Total_Rest_Elements">5</span>
            <span className="Total_Rest_Elements">6</span>
            <span className="Total_Rest_Elements">7</span>
            <span className="Total_Rest_Elements">8</span>
            {/* <div className="Total_Rest_Elements">1</div>
            <div className="Total_Rest_Elements">2</div>
            <div className="Total_Rest_Elements">3</div>
            <div className="Total_Rest_Elements">4</div>
            <div className="Total_Rest_Elements">5</div>
            <div className="Total_Rest_Elements">6</div>
            <div className="Total_Rest_Elements">7</div>
            <div className="Total_Rest_Elements">8</div> */}

          </div>
          <div className="Action_Button">
            <button>Back</button>
            <button>Save</button>
            <button>Submit</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TimeSheet;
