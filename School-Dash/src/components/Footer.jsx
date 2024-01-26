import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <h2>
          Oor Social Media Accounts :-
          <FaFacebook />
          <FaWhatsapp />
          <FaXTwitter />
          <FaInstagram />
          <FaFacebookMessenger />
          <CgMail />
        </h2>
        <h2>Copyright ©2024 All rights reserved - DK GROUP OF DEVELOPMENT</h2>
      </div>
    </>
  );
}

export default Footer;
