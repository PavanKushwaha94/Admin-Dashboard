import React from "react";

import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiStudent } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentBold } from "react-icons/pi";
import { MdCelebration } from "react-icons/md";
import { GrUserPolice } from "react-icons/gr";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div>
      <div className="side-menu">
        <div className="brand-name">
          <h2>
            <CgProfile /> &nbsp; Brand Name
          </h2>
        </div>
        <ul>
          <li>
            <span>
              <MdDashboard />
              &nbsp; Dashboard
            </span>
          </li>
          <li>
            <span>
              <CgProfile />
              &nbsp; Profile
            </span>
          </li>
          <li>
            <span>
              <PiStudent />
              &nbsp; Student Details
            </span>
          </li>
          <li>
            <span>
              <MdAttachMoney />
              &nbsp; Fees Structure
            </span>
          </li>
          <li>
            <span>
              <FaChartArea />
              &nbsp; Our Campus
            </span>
          </li>
          <li>
            <span>
              <LiaChalkboardTeacherSolid />
              &nbsp; Teachers
            </span>
          </li>
          <li>
            <span>
              <PiStudentBold />
              &nbsp; Our Toppers
            </span>
          </li>
          <li>
            <span>
              <MdCelebration />
              &nbsp; Celebration Day
            </span>
          </li>
          <li>
            <span>
              <GrUserPolice />
              &nbsp; NCC
            </span>
          </li>
          <li>
            <span>
              <IoMdHelpCircleOutline />
              &nbsp; Help
            </span>
          </li>
          <li>
            <span>
              <FaAddressCard />
              &nbsp; Address
            </span>
          </li>
          <li>
            <span>
              <IoSettingsOutline />
              &nbsp; Settings
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
