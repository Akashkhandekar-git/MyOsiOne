import React, { useState } from "react";
import logo from "../../assets/image.png";
import { FaPowerOff } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import "./Header.css";

const Header = ({ isMegaMenu, setIsMegaMenu }) => {
  const [user, setUser] = useState(false);

  const CallMegaMenu = () => {
    setIsMegaMenu(!isMegaMenu);
  };

  const handleUser =()=>{
    setUser(!user);
  }
  return (
    <>
      <div className="navbar shadow">
        <div>
          <FiMenu onClick={CallMegaMenu} className="hemburger" />
        </div>
        <img className="logo" src={logo} alt="" />
        <ul className="menu_list">
          <li>
            OSI Central <FaLink />
          </li>
          <li>
            Logout <FaPowerOff />
          </li>
          <li>
            Help <IoMdHelpCircleOutline />
          </li>
        
          <li>
            <FaUserAlt className="userIcon" /> User
          </li>
          <li><FaCaretDown onClick={handleUser}className="Arrow_Down" /></li>
          
        </ul>

      </div>
      {
            user ? (<>
            <div className="user_div">
            <ul className="user_Drop_Down">
              <li>My Profile</li>
              <li>Organization Chart</li>
              <li>Logout</li>
              </ul>
              </div>
              </>) 
              :
              <></>
          }
    </>
  );
};

export default Header;
