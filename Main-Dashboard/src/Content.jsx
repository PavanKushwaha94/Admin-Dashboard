import React from "react";
// import { Link } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";
import { FaHospitalSymbol } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Content() {
  return (
    <content>
      <div className="headings">
        <h2 className="left-heading">Projects</h2>
        <h2 className="right-heading">Create New Project</h2>
      </div>
      <div className="box">
        <div className="first-box">
          <h2>
            <FaAmazon className="amazon-icon" />
            {/* <Link to="/ecom"> */}
            <a href="#">E-Com Management</a> {/* </Link> */}
          </h2>
          <div className="direction">
            <h4>CLICK HERE FOR VISIT</h4>
            <h3>YOUR DASHBOARD</h3>
          </div>
        </div>

        <div className="second-box">
          <h2>
            <FaHospitalSymbol className="hospital-icon" />
            <a href="#"> Hospital Management</a>
          </h2>
          <div className="direction">
            <h4>CLICK HERE FOR VISIT</h4>
            <h3>YOUR DASHBOARD</h3>
          </div>
        </div>

        <div className="third-box">
          <h2>
            <FaSchool className="school-icon" />
            <a href="#"> School Management</a>
          </h2>
          <div className="direction">
            <h4>CLICK HERE FOR VISIT</h4>
            <h3>YOUR DASHBOARD</h3>
          </div>
        </div>
      </div>
      <div className="active-project">
        <h3>Active Projects</h3>
      </div>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th>
                <h2>Project Name</h2>
              </th>
              <th>
                <h2>Hours</h2>
              </th>
              <th>
                <h2>Priority</h2>
              </th>
              <th>
                <h2>Users</h2>
              </th>
              <th>
                <h2>Visit Project</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <h1>
                  Hospital Members
                  <BsPeople className="main-icon" />
                </h1>
              </td>
              <td>
                <a href="#">15</a>
              </td>
              <td>
                <a href="#">Medium</a>
              </td>
              <td>
                <a href="#">2000</a>
              </td>
              <td>
                <a href="#">Click Here</a>
              </td>
            </tr>

            <tr>
              <td>
                <h1>
                  School Toppers <BsPeople className="main-icon" />{" "}
                </h1>
              </td>
              <td>
                <a href="#">50</a>
              </td>
              <td>
                <a href="#">High</a>
              </td>
              <td>
                <a href="#">100000</a>
              </td>
              <td>
                <a href="#">Click Here</a>
              </td>
            </tr>

            <tr>
              <td>
                <h1>
                  Amazon-Products <FaAmazon className="main-icon" />{" "}
                </h1>
              </td>
              <td>
                <a href="#">120</a>
              </td>
              <td>
                <a href="#">Low</a>
              </td>
              <td>
                <a href="#">200</a>
              </td>
              <td>
                <a href="#">Click Here</a>
              </td>
            </tr>

            <tr>
              <td>
                <h1>
                  School Facility <BsPeople className="main-icon" />{" "}
                </h1>
              </td>
              <td>
                <a href="#">76</a>
              </td>
              <td>
                <a href="#">Medium</a>
              </td>
              <td>
                <a href="#">7000</a>
              </td>
              <td>
                <a href="#">Click Here</a>
              </td>
            </tr>

            <tr>
              <td>
                <h1>
                  Hospital Review <FaHospitalSymbol className="main-icon" />{" "}
                </h1>
              </td>
              <td>
                <a href="#">45</a>
              </td>
              <td>
                <a href="#">High</a>
              </td>
              <td>
                <a href="#">15600</a>
              </td>
              <td>
                <a href="#">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="main-footer">
        <h2>
          Our Social Meadia Accounts :- <FaFacebook />
          <FaWhatsapp />
          <FaXTwitter />
          <FaInstagram />
          <FaFacebookMessenger />
          <CgMail />
        </h2>

        <h3>
          Copyright ©2024 All rights reserved - National Informatics Centre
        </h3>
      </div>
    </content>
  );
}

export default Content;
