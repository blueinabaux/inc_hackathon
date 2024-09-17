import React, { useState } from "react";
import "../Styling/Home.css";
import logo_hack from "../Assets/logo.png";
import pict_logo from "../Assets/pict_logo.png";
import Register_extended from "../Assets/Registration_extended.png";
import round1 from "../Assets/techfiesta-removebg-preview.png";
import TechFiestaTemplate from "../Assets/TechFiesta_Template.pptx";
import Results from "../Assets/Results.png";
import winners from '../Assets/Winners.png'
import { Link } from "react-router-dom";

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog1, setShowDialog1] = useState(false);
  const handleDialogToggle = () => {
    setShowDialog(!showDialog);
  };
  const handleDialogToggle1 = () => {
    setShowDialog1(!showDialog1);
  };

  return (
    <>
      <div className="marquee" id="ppt_download">
        <p>TechFiesta'25 Coming Soon !</p>
      </div>
      <div className="Registeration_extension" onClick={handleDialogToggle}>
        <div className="extended">
          <img src={Register_extended} alt="" />
        </div>
      </div>
      {
        <div
          className="Registeration_extension_1"
          onClick={handleDialogToggle1}
        >
          {/* <div className="extended">
            <img src={winners} alt="" />
          </div> */}
        </div>
      }

      {showDialog && (
        <div className="dialog_home">
          <span className="close" onClick={handleDialogToggle}>
            &times;
          </span>
          <h1>Page under construction</h1>
          {/* <h4>Updates will be conveyed soon</h4> */}
        </div>
      )}
      {showDialog1 && (
        <div className="dialog_home_1">
          <h1>Winners to be Declared</h1>
          <span className="close" onClick={handleDialogToggle1}>
            &times;
          </span>
          
        </div>
      )}
      <div className="main_page">
        <div className="content-home">
          <div className="home_content">
            <img src={pict_logo} alt="logo_of pict" />
          </div>
          <div className="home_content">
            <h4>SOCIETY FOR COMPUTER TECHNOLOGY AND RESEARCH'S</h4>
            <h2>PUNE INSTITUTE OF COMPUTER TECHNOLOGY</h2>
            <h4>PRESENTS</h4>
          </div>
        </div>
        <h1>TECHFIESTA - AN INTERNATIONAL HACKATHON</h1>
        <img src={logo_hack} alt="logo_of hackathon" />
      </div>
    </>
  );
};

export default Home;
