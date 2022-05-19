import React from "react";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div id="hero" className="min-vh-100 text-center d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-white">
              <h1 className="display-4 text-white fw-bold">
                Hey, I'm Jayoda Halloluwa
              </h1>
              <p className="lead mt-3 mb-4 mx-auto">
                An Undergraduate, who loves to lead my career as a front-end
                developer and UI / UX designer.
              </p>
              <a href="#projects" className="btn">
                Explore My Projects
              </a>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default Header;
