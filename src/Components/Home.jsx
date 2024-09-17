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
        <p>Congratulations to all Winners of TechFiesta'25</p>
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
          <div className="extended">
            <img src={winners} alt="" />
          </div>
        </div>
      }

      {showDialog && (
        <div className="dialog_home">
          <h1>Grand Finale Schedule</h1>
          <p>
            The most awaited and thrilling finale of Techfiesta will be
            conducted in offline mode at the PICT Campus on 29th and 30th March.
          </p>
          <hr />
          <h1>Regarding Idea Submission</h1>
          <p>
            Those who have paid the fees, but have not completed g-form / Not
            received a mail, please click on the link below -
          </p>
          <div className="link_to_next_page">
            <button id="next_page">
              <a href="https://forms.gle/AJWgP4aKcwqXgZKi8">Google Form</a>
            </button>
          </div>

          <hr />
          <h1>Registration Extended</h1>
          <span className="close" onClick={handleDialogToggle}>
            &times;
          </span>
          <p>
            In view of the requests from various colleges regarding idea
            submission, registration & idea submission for hackathon is extended
            upto 19th Feb.
          </p>
          <div className="link_to_next_page">
            <button id="next_page">
              <Link to="/register" onClick={handleDialogToggle}>
                Register Now
              </Link>
            </button>
          </div>
          <hr />
          <h1>Instructions Regarding Online Meeting</h1>
          <p>
            An online meeting is scheduled on 16th February at 11:00 am for all
            team leaders, please check the instructions below.
          </p>
          <div className="link_to_next_page">
            <button id="next_page">
              <Link to="/instructions" onClick={handleDialogToggle}>
                Details
              </Link>
            </button>
          </div>
        </div>
      )}
      {showDialog1 && (
        <div className="dialog_home_1">
          <h1>Winners of TechFiesta</h1>
          <span className="close" onClick={handleDialogToggle1}>
            &times;
          </span>
          <p>Congratulations to all the Winners and participants who showed enthusiasm throughout the TechFiesta-Grand Finale</p>
          <div className="link_to_next_page">
            <button id="next_page">
              <Link to='/winner'>
                Winners
              </Link>
            </button>
            <br />
            <br />
          </div>
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
