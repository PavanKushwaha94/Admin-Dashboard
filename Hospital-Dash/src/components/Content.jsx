import React from "react";

import { MdElderlyWoman } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";

function Content() {
  return (
    <>
      <div className="heading">
        <h1>YOUR DASHBOARD</h1>
      </div>

      <div className="container">
        <div className="box1">
          <h2>Active Patient</h2>
          <MdElderlyWoman className="pic" />
          <h3>600</h3>
        </div>
        <div className="box1">
          <h2>Active Doctor</h2>
          <FaUserDoctor className="pic" />
          <h3>200+</h3>
        </div>
        <div className="box1">
          <h2>Active Ambulance</h2>
          <FaAmbulance className="pic" />
          <h3>100+</h3>
        </div>
      </div>
      <div className="some-words">
        <p>
          Hello ! Customers here are some data of my hospital , here you can
          easily read and watch graph wise data of my hospital. <br />
          we are trying to give you best tratement by our best Facility. now if
          you are feel that this is best hospital for you. <br /> then you can
          easily visit this portal and book your appoitment early.....Thank You
          So Much !!!
        </p>
      </div>
    </>
  );
}

export default Content;
