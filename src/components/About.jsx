import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <img src={about} alt="about" />
          </div>
          <div className="col-lg-5 offset-lg-1">
            <h1>About Me</h1>
            <h6 className="mt-2 mb-4">
              Here you will find more information about me
            </h6>
            <p className="mb-4">
              I am a third year undergraduate who follows BSc in Software
              Engineering at National School of Business Managment. My ambition
              is to develop my career as a front-end developer. Also I am
              passionate about designing user interfaces with a view to improve
              user experience. And I love to learn and explore new areas related
              to IT technology. I'm open to job opportunities where I can learn
              and develop. If you have a good opportunity that matches my skills
              then please contact me.
            </p>
            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
