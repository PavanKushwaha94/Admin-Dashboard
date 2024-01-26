import React from "react";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { SiPowerpages } from "react-icons/si";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsLayoutSplit } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa";
import { MdManageSearch } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <MdDashboard className="icon_header" /> DASHBOARD
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <CgProfile className="icon" /> Profile
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoSettingsOutline className="icon" /> Settings
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <SiPowerpages className="icon" /> Pages
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineAttachMoney className="icon" /> Pricing
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsLayoutSplit className="icon" /> Layouts
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaServicestack className="icon" /> Services
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdManageSearch className="icon" /> Explore
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineManageSearch className="icon" /> About Us
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
