import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import axios from "axios";

export default function Contact() {
  const [contactData, setContactData] = useState({});
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("https://uriel-protfolio.onrender.com/api/v1/contact", contactData);

    setInputValue({ name: "", email: "", phone: "", message: "" });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <form className="container" id="contact" onSubmit={handleSubmit}>
      <div className="row">
        <h1 className="headerTxt" data-aos="fade-up" data-aos-duration="3000">
          GET IN TOUCH
        </h1>
      </div>
      <div className="row">
        <h4
          className="headerTxtHear"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          style={{ textAlign: "center" }}
        >
          I’d love to hear from you!
        </h4>
      </div>
      <div className="row input-container">
        <div data-aos="fade-right">
          <div className="styled-input wide">
            <input
              type="text"
              required
              name="name"
              onChange={handleChange}
              value={inputValue.name}
            />
            <label>Name</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12" data-aos="fade-left">
          <div className="styled-input">
            <input
              type="email"
              required
              name="email"
              onChange={handleChange}
              value={inputValue.email}
            />
            <label>Email</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12" data-aos="fade-right">
          <div className="styled-input" style={{ float: "right" }}>
            <input
              type="text"
              required
              name="phone"
              onChange={handleChange}
              value={inputValue.phone}
            />
            <label>Phone Number</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea
              required
              data-aos="fade-right"
              name="message"
              onChange={handleChange}
              value={inputValue.message}
            ></textarea>
            <label>Message</label>
            <div className="containerBtn" data-aos="fade-up">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
