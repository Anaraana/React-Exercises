import React, { useState } from "react";

const DemoUseState = () => {
  const [ageJamiya, setAgeJamiya] = useState(18);
  const [address, setAddress] = useState("5005 Newport dr");
  console.log(ageJamiya);
  const ageUpJamiyaFunction = () => {
    
    console.log("Jamiya is aging up");
    // setAgeJamiya(19);
    setAgeJamiya((currentState) => {
      return currentState + 1;
    });
  };
  return (
    <div>
      <div>Jamiya is {ageJamiya} years old!</div>
      <div> Address:{address}</div>
      <button
        // onClick={()=>{
        //     console.log('work, clicked')
        // }}
        onClick={ageUpJamiyaFunction}
      >
        Age up Jamiya
      </button>
      <button onClick={() => setAddress("Chicago,IL")}>change address</button>
    </div>
  );
};
export default DemoUseState;
