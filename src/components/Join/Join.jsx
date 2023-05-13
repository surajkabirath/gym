import "./join.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub,BsPhoneFill} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa"
import {AiTwotoneMail} from "react-icons/ai"
const Join = () => {
  return (
    <div>

<h1 className="join-us gradient__text" id="join-us">Join Us</h1>
    <div className="container">
      <span className="big-circle"></span>
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Join our gym and start your fitness journey today!
          </p>

          <div className="info">
            <div className="information">
              <FaMapMarkerAlt/> 
              <p style={{paddingLeft: 10, paddingBottom:5}}>Dharan,Sunsari,Nepal</p>
            </div>
            <div className="information">
              <AiTwotoneMail/>
              <p style={{paddingLeft: 10, paddingBottom:5}}> surajkabirath1234@gmail.com</p>
            </div>
            <div className="information">
              <BsPhoneFill/>
              <p style={{paddingLeft: 10, paddingBottom:5}}>9810549624</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/suraj.kabirath">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/surajkabirath__/">
                <BsInstagram />
              </a>
              <a href="https://github.com/surajkabirath">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/suraj-kabirath-b46b0225b/">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Join;
