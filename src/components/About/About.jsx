import React from "react";
import "./about.css";
import image1 from "../../assets/gymer1.jpg";
import image2 from "../../assets/gymer.jpg";
import image3 from "../../assets/gymer2.jpg";
import image4 from "../../assets/gymer3.jpg";
const About = () => {
  return (
    <div>
      <h1 className="about-header gradient__text2">ABOUT US</h1>
      <div className="about " id="about">
        <div className="about-left">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
        <div className="about-right">
          <div className="details-right">
            <span className="details-text">
              "Welcome to Fitness Club Our mission is to help you achieve your
              fitness goals and lead a healthier lifestyle. With our
              user-friendly and feature-rich app, we aim to make your fitness
              journey enjoyable, motivating, and effective.
            </span>
            <h3 className="gradient__text">Key Features:</h3>
            <div className="details-feature">
              <span className="feature-text">
                1. Personalized workout plans tailored to your needs.
              </span>
              <span className="feature-text">
                2. Access to an extensive exercise library for varied workouts.
              </span>
              <span className="feature-text">
                3. Track your progress and stay motivated.
              </span>
              <span className="feature-text">
                4. Get nutrition guidance and healthy recipes.
              </span>
              <span className="feature-text">
                5. Connect with a supportive fitness community.
              </span>
            </div>
            <span className="details-text">
              Join thousands of users who have transformed their lives with our
              app and experience the benefits of a stronger, fitter, and
              healthier you. Download Fitenss Club now and start your fitness
              journey today!"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
