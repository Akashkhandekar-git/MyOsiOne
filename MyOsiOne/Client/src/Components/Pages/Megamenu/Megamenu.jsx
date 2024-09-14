import React from "react";
import "./Megamenu.css";
import { IoHomeOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { GoGoal } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { IoCalendarNumber } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";

const Megamenu = ({ isMegaMenu, setIsMegaMenu }) => {

  const closeMegaMenu = () => {
    setIsMegaMenu(!isMegaMenu);
  };
  
  return (
    <>
      <div className="megamenu">
        <div className="cross_icon" onClick={closeMegaMenu}>
          X
        </div>
        <div className="megamenu_list">
          <div>
            <h6>Performance</h6>
            <hr />
            <div className="megamenu_list_menu">
              <GoGoal className="icon" />
              Goals
            </div>
          </div>

          <div>
            <h6>Timesheets</h6>
            <hr />

            <div className="megamenu_list_menu">
              <FaBusinessTime className="icon" />
              My Timesheets
            </div>
            <div className="megamenu_list_menu">
              <MdOutlineWork className="icon" />
              Timesheet Approval
            </div>
          </div>

          <div>
            <h6>Leave</h6>
            <hr />
            <div className="megamenu_list_menu">
              <IoCalendarNumber className="icon" />
              My Leaves
            </div>
            <div className="megamenu_list_menu">
              <FaRegCalendarCheck className="icon" />
              Leave Approvals
            </div>
          </div>

          <div>
            <h6>Expenses</h6>
            <hr />
            <div className="megamenu_list_menu">
              <CiWallet className="icon" />
              Expenses
            </div>
            <div className="megamenu_list_menu">
              <IoWalletOutline className="icon" />
              Expense Approval
            </div>
          </div>
          <hr />
        </div>
        <div className="megamenu_list-menu">
          <div>
            <h6>Reports</h6> <hr />
            <div className="megamenu_list_menu">
              <TbReport className="icon" /> My Reports
            </div>
            <div className="megamenu_list_menu">
              <FaChartPie className="icon" />
              All reports{" "}
            </div>
          </div>
          <div>
            <h6>Contractual Service</h6>
            <hr />

            <div className="megamenu_list_menu">
              {" "}
              <RiCustomerService2Fill className="icon" />
              Contractual Summary
            </div>
            <div className="megamenu_list_menu">
              <MdMiscellaneousServices className="icon" />
              Consent Form
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Megamenu;
