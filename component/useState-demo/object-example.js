import React, { useState } from "react"
import { Md3DRotation } from "react-icons/md";
const DemoUseState = () => {
  const [bootcamp, setBootcamp] = useState({
    studentCount: 13,
    isPartTime: true,
    isFinished: false,
  });
  return (
    <div>
        
      <pre>{JSON.stringify(bootcamp, null, 2)}</pre>
      {bootcamp.isFinished && <div> Don't forget to do your homework</div>}
      <button
        onClick={() => {
          setBootcamp((currState) => ({
              ...currState,
              isFinished: !currState.isFinished,
          }));
        }}
      >
     <Md3DRotation />
        {bootcamp.isFinished ? "Finished" : bootcamp.isPartTime ?"Finish class" :'still have time'}
      </button>
    </div>
  );
};

export default DemoUseState;


