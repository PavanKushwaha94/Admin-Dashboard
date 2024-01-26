import React from "react";

import { CiSearch } from "react-icons/ci";

import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="nav">
            <div className="search">
              <input type="text" placeholder="Search"></input>
              <button type="submit" alt="">
                <CiSearch />
              </button>
            </div>
          </div>
          <div className="right-nav">
            <div className="box1">
              <IoMdNotificationsOutline />
            </div>
            <div className="box2">
              <MdOutlineMessage className="pic2" />
            </div>

            <div className="box3">
              <CgProfile className="pic3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
