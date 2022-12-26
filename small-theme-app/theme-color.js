import React from "react";
import { useContext } from "react";
import { SmallTheme } from ".";

export default function ThemeColor (){
    const {setColor}=useContext(SmallTheme)
    return (
        <button onClick={()=>{
            setColor((curr)=> !curr)
        }}>CHANGE Color</button>
    )
}



