import React from "react";

const Names = (props) => {
  return (
    <div className="profile-container">
      <div className="initial">{props.name.last[0] + props.name.first[0]}</div>
      <div className="information">
        <div className="fullName"><h1>{props.name.first + " " + props.name.last}</h1></div>
        <h1><div>{props.name.title}</div></h1>
      </div>
    </div>
  );
};

export default Names;
