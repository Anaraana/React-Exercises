import React from "react";
import './color-picker.css';
import { useState } from 'react';


export default function ColorPicker (){

    const [color,setColor]=useState({colorA:'#000000', colorB:'#FFFFFF'})
   const onColorChange=(e)=>{
const fieldName= e.target.name
const fieldValue=e.target.value
setColor((currState)=>{
return{
    ...currState,
    [fieldName]:fieldValue,
}
})
   }
return (
    <div className="color-picker-container">
       
        <form>
            <label>Color:A
                <input type={'color'}
                name='colorA'
                value={color.colorA}
                onChange={(e)=>{onColorChange(e)}}></input>
               
            </label>
            <label>Color:B
                <input type={'color'}
                name='colorB'
                value={color.colorB}
                onChange={(e)=>{onColorChange(e)}}></input>
            </label>
          
        </form>
        <div className="color-picker" style={{height: '500px', width:"500px",backgroundImage: `linear-gradient(${color.colorA}, ${color.colorB})`}}>
            
        </div>
        
      
    </div>
)
   
}