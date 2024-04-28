import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <form className="container" id="contact">
      <div className="row">
        <h1 className="headerTxt" data-aos="fade-up" data-aos-duration="3000">
          contact us
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
          We'd love to hear from you!
        </h4>
      </div>
      <div className="row input-container">
        <div data-aos="fade-right">
          <div className="styled-input wide">
            <input type="text" required />
            <label>Name</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12" data-aos="fade-left">
          <div className="styled-input">
            <input type="email" required />
            <label>Email</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12" data-aos="fade-right">
          <div className="styled-input" style={{ float: "right" }}>
            <input type="text" required />
            <label>Phone Number</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea required data-aos="fade-right"></textarea>
            <label>Message</label>
            <div className="containerBtn">
              <button
                type="submit"
                className="btn-lrg submit-btn"
                data-aos="fade-up"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
