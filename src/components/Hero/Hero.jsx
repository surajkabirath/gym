import React from "react";
import Header from "../Header/Header";
import "./hero.css";
import hero_image from "../../assets/hero.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import bicep from "../../assets/bicep1.png";
import diet from "../../assets/diet.png";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero " id="home">
      <div className="hero_left gradient__bg">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          
          <span className="gradient__text2">
            the best fitness club in the dharan
          </span>
         
        </div>
        <div className="hero-text">
      
          <div className="gradient__text">
            <span>Build The Perfect Body</span>
          </div>
          <div>
            <span>
            "Transform your body and mind with us! Join our fitness club and unlock your full potential with our state-of-the-art facilities, expert trainers, and a supportive community. Whether you're a beginner or a fitness enthusiast, we've got you covered. Get ready to see results and feel your best with every workout."

            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={50} start={1} delay="4" preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              {" "}
              <span>
                <NumberCounter end={1445} start={1200} delay="7" preFix="+" />
              </span>
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={67} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="hero_right gradient__bg">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ ...transition, type: "tween" }}
          className="heart-rate"
        >
          <img src={bicep} alt="" style={{ width: "7rem" }} />
          <img src={diet} alt="" style={{ width: "6rem" }} />

          {/* <span>Heart Rate </span>
          <span>116 bpm</span> */}
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
