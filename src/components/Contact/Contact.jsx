import React from "react";
import Card from "./Card";
import Data from "./Data";

const Contact = () => {
  return (
    <section id="contact" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h1>Contact</h1>
              <h6>Here are some ways in which you can contact me</h6>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          {Data.map((value) => (
            <div className="col-lg-4 col-md-6" key={value.id}>
              <Card
                icon={value.fontawesome}
                contact_info={value.contact}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
