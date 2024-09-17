import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styling/Register.css";
import QR from "../Assets/payment_image.jpg";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    team_name: "",
    problem_id: "1001",
    college: "",
    place: "",
    leader_name: "",
    email: "",
    mobile: "",
    utr: "",
  });

  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      toast.error("Invalid email format");
      return;
    }
    const mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(data.mobile)) {
      toast.error("Invalid mobile number format");
      return;
    }

    try {
      const formData = {
        team_name: data.team_name.toLowerCase(),
        problem_id: data.problem_id,
        college: data.college,
        place: data.place,
        leader_name: data.leader_name,
        email: data.email,
        mobile: Number(data.mobile),
        utr: data.utr,
      };
      const response = await fetch("https://apitechfiesta2.pict.edu/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await response.json();
      console.log(response);
      if (response.status === 401) {
        toast.error("Email/Phone already registered with us");
      } else if (response.status === 402) {
        toast.error("Team Name Already Registered");
      } else if (response.status === 201) {
        navigate("/thankyoufrompict_techfiesta");
      }
    } catch (er) {
      console.log(er);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* <div className="marquee">
        <h4>
          REGISTRATION FEE - <b>&#8377; 400 /- </b>(Till 19th Feb)
        </h4>
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="main_register">
          <h1>Register Now</h1>
          <div className="register_form">
            <div className="form_div1">
              <label htmlFor="team_name">Team Name</label>
              <br />
              <input
                type="text"
                required
                name="team_name"
                pattern="[A-Za-z ]+"
                value={data.team_name}
                autoComplete="off"
                onChange={handleChange}
                title="Please enter only [a-z] characters"
              />
              <br />
              <label htmlFor="problem_id">Problem Statement ID</label>
              <input
                type="text"
                id="problem"
                name="problem_id"
                value={data.problem_id}
                onChange={handleChange}
                pattern="[0-9]+"
                title="Please enter only numeric characters"
              />
              <br />
              <label htmlFor="leader_name">Name of Leader</label>
              <br />
              <input
                type="text"
                required
                name="leader_name"
                value={data.leader_name}
                pattern="[A-Za-z ]+"
                autoComplete="off"
                onChange={handleChange}
                title="Please enter only [a-z] characters"
              />
              <br />
              <label htmlFor="email">Email Id</label>
              <br />
              <input
                type="email"
                required
                name="email"
                value={data.email}
                autoComplete="off"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="mobile">Mobile Number</label>
              <br />
              <input
                type="text"
                required
                name="mobile"
                value={data.mobile}
                autoComplete="off"
                onChange={handleChange}
                pattern="[0-9]+"
                title="Please enter only numeric characters"
              />
              <br />
            </div>
            <div className="form_div1">
              <label htmlFor="college">College Name</label>
              <br />
              <input
                type="text"
                required
                pattern="[A-Za-z ]+"
                name="college"
                value={data.college}
                autoComplete="off"
                onChange={handleChange}
                title="Please enter only [a-z] characters"
              />
              <br />
              <label htmlFor="place">College Location</label>
              <br />
              <input
                type="text"
                required
                name="place"
                value={data.place}
                autoComplete="off"
                onChange={handleChange}
                pattern="[A-Za-z ]+"
                title="Please enter only [a-z] characters"
              />
              <br />
              <div className="payment_image">
                <img src={QR} alt="" />
              </div>
              <label htmlFor="utr">Bank Transaction Id</label>
              <br />
              <input
                type="text"
                required
                name="utr"
                value={data.utr}
                autoComplete="off"
                onChange={handleChange}
                pattern="[A-Za-z0-9]+"
                title="Please don't enter special characters like @,$,#..."
              />
            </div>
            <div className="form_div1">
              <div className="checkbox-style">
                <input type="checkbox" required />
              </div>
              <label className="read_inst">I have read all the instructions</label>
            </div>
            <div className="form_div1">
              <div className="button_form_div">
                <button type="submit">
                  Submit <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default Register;
