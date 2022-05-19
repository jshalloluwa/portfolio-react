import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <p className="mt-4">{props.title}</p>
      <h5 className="my-3">{props.description}</h5>
      <a href={props.url} className="link" rel="noreferrer" target="_blank">{props.text}</a>
    </div>
  );
};

export default Card;
