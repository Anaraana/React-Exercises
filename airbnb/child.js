import React from "react";

const SmallComponent = (props) => {
  return (
    <div className="container">
    
        <img src={props.house.img} alt=""></img>

        <div className="information1">
          <p>{props.house.location}</p>
          {props.house.rate}
        </div>
        <div className="information2">
          <p>{props.house.miles}</p>
          <p>{props.house.date}</p>
          <p>{props.house.price}</p>
        </div>
      
    </div>
  );
};

export default SmallComponent;
