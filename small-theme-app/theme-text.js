import React,{useContext} from "react";
import {SmallTheme} from './'



export default function ThemeText(){
const {color}=useContext(SmallTheme)
    return(
   <div style={{backgroundColor: color ? 'white': 'black', color: color ? 'black' : 'white' }}>RANDOM TEXT</div>
        
    )
}
