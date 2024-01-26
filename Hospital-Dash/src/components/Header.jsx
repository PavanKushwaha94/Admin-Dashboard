import React from "react";

import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <>
      <div className="main-header">
        <div className="search-box">
          <input type="text" placeholder="Search here.."></input>
          <button type="submit">
            <IoSearchOutline />
          </button>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="#" className="nav">
                Home
              </a>
              <a href="#" className="nav">
                About
              </a>
              <a href="#" className="nav">
                Contact
              </a>
              <a href="#" className="nav">
                Term & Condition
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-bar">
        <div className="right">
          <IoMdNotificationsOutline className="right1" />
          <FaRegMessage className="right2" />
          <CgProfile className="right3" />
        </div>
      </div>
    </>
  );
}

export default Header;
