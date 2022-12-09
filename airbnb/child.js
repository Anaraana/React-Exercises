import React from "react";
import { AiFillStar } from "react-icons/ai";

const PropertyInfo = (props) => {
  console.log(props.house.img)
  return (
    <div className="airbnb-container">
    
        <img src={props.house.img} alt="" />

        <div className="information1">
          <p>{props.house.location}</p>
          <div className="smallInformation">
          <AiFillStar />{props.house.rate}
          </div>
        </div>
        <div className="information2">
          <p style={{color:"#717171"}}>{props.house.miles}</p>
          <p style={{color:"#717171"}}>{props.house.date}</p>
          <b style={{fontWeight: '600'}}>{props.house.price}</b>
          <span>night</span>
        </div>
      
    </div>
  );
};

export default PropertyInfo;
