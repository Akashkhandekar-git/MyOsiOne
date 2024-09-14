import React from 'react'
import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { GoGoal } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
        <ul className='sidebar_list'>
            <li> <NavLink to="/home"><IoHomeOutline className='icon shadow '/></NavLink></li>
            <li><GrNotes className='icon shadow' /></li>
            <li><SlCalender className='icon shadow' /></li>
            <li><GoGoal className='icon shadow' /></li>
            <li><IoSettingsOutline className='icon shadow' /></li>

        </ul>
    </div>
    </>
  )
}

export default Sidebar