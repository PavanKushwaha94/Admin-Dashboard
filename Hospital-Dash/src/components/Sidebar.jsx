import React from "react";

import { FaRegHospital } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdElderlyWoman } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { MdOutlineCountertops } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { FaHandHoldingMedical } from "react-icons/fa";

function Sidebar() {
  return (
    <>
      <div className="sidebar-menu">
        <div className="brand-menu">
          <h1>DK HOSPITAL</h1>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <MdOutlineDashboardCustomize /> <a href="#">DASHBOARD</a>
            </li>
            <li>
              <MdElderlyWoman /> <a href="#">Patients</a>
            </li>
            <li>
              <FaUserDoctor /> <a href="#">Doctors</a>
            </li>
            <li>
              <FaRegAddressBook /> <a href="#">Addres</a>
            </li>
            <li>
              <FaHospitalUser /> <a href="#">Operation</a>
            </li>
            <li>
              <MdAttachMoney /> <a href="#">Payments</a>
            </li>
            <li>
              <FaBriefcaseMedical /> <a href="#">Medicine</a>
            </li>
            <li>
              <FaAmbulance /> <a href="#">Ambulance</a>
            </li>
            <li>
              <MdOutlineCountertops /> <a href="#">Counter Details</a>
            </li>
            <li>
              <VscFeedback /> <a href="#">Patient Feedback</a>
            </li>
            <li>
              <FaHandHoldingMedical /> <a href="#">Online Appoitment</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
