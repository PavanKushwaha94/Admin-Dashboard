import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header className="header">
      <div className="menu-icon">
        <IoMenu className="icon" />
      </div>
      <div className="header-left">
        <input type="text" placeholder="Search" id="search-box"></input>
        <FaSearch className="search-icon" />
      </div>
      <div className="header-right">
        <IoMdNotificationsOutline className="icon-bell" />
        <CgProfile className="icon-bell1" />
      </div>
    </header>
  );
}

export default Header;
