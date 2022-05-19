import React from "react";

const Card = (props) => {
  return (
    <div className="card h-100">
      <div className="row gy-2 p-4">
        <div className="col-md-2">
          <i className={props.icon}></i>
        </div>
        <div className="col-md-10">
          <p>{props.contact_info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
