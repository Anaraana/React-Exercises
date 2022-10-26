import React, {useState} from "react";

const Fireworks = () => {
    const [firework, setFirework] = useState({
    
    });
    return (
     
        <button
          onClick={() => {
            setFirework((currState) => ({
                ...currState,
                isFinished: !currState.isFinished,
            }));
          }}
        >
       {/* <Md3DRotation /> */}
          {firework.isFinished ? "🧨"  :'💥'}
        </button>
   
    );
  };
  
  export default Fireworks;