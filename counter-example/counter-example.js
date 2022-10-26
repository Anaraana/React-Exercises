// import React, { useState } from "react";

// const Counter = () =>{
//     const [number, setNumber] = useState(0);
//     const numberUp = ()=>{
//         setNumber ((currentState)=>{})
       
//     };
//     return (
//         <div>
//             <pre>{number}</pre>
//             {/* erunduu bol ingej bichne */}
//             <button onClick= {()=>{
//                 setNumber((currentState)=>{
//                     return currentState +1
//                 })
//             }}> +1</button>

//               <button onClick= {()=>{
//                 setNumber((currentState)=>{
//                     return currentState +10
//                 })
//             }}> +10</button>
//             {/* ene ni easy bolgood iluu {} hasaad zasaad */}

//              <button onClick= {()=> setNumber((currentState)=>currentState -1)}>
//                  -1</button>

//              <button onClick= {()=>
//                 setNumber((currentState)=> currentState -10)}> 
//                 -10</button> 
//         </div>
//         )};
// export default Counter


/* .map ashiglaj ingej hiivel iluu dynamic yuma */
import React, {useState} from "react";


const Counter =()=>{
    const [number, setNumber]= useState(0);
    const keys = [-1, -10,+1, +10, -4, -40, +5.5 , -5.5];
    return(
        <div>
            <pre>{number}</pre>
            {keys.map((key)=>{
                return (
                    <button onClick={()=> setNumber ((currentState)=> currentState + key)}>
                        {key >0 ? "+" +key : key}
                    </button>
                )
            })
            }
        </div>
    )};

export default Counter