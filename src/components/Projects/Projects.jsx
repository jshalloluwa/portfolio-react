import React from "react";
import Card from "./Card";
import Data from "./Data";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h1>Recent Projects</h1>
              <h6>Here you will find some of projects that I involved</h6>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          {Data.map((value) => (
            <div className="col-lg-4 col-md-6" key={value.id}>
              <Card
                image={value.img}
                title={value.project_name}
                description={value.desc}
                url={value.link_url}
                text={value.link_text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
