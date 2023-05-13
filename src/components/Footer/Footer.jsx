import React from "react";
import "./footer.css";
import logo from "../../assets/fitness2.png"
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
       
       
        <div className="logo-footer">
            <img src={logo} alt="" />
        </div>
      
        <span className="copyright"> @ 2022 Fitness Club.All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
