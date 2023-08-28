import React from "react";
import "./Card.css";
const Card = ({ title, currentDegree, minDegree,icon,maxDegree}) => {
  return (

    <div className="card">
      <div className="container">
        <h3 className="card-title">{title}</h3>
        <div className="temp">  {currentDegree}° </div>
           <img className="icon" src={icon} />
        <div className="card-footer">
           <p className="temp-max-min"> {minDegree }° </p> | <p className="temp-max-min"> { maxDegree}°</p>
        </div>
      </div>
    </div>

  );
};

export default Card;
