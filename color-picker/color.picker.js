import React from "react";
import './color-picker.css';
import { useState } from 'react';


export default function ColorPicker (){

    const [color,setColor]=useState('')
    const colorA=()=>{}
    const colorB=()=>{}
return (
    <div>
        <div>
        <form>
            <label>
                <input type={'color'}></input>
                <input type={'color'}></input>
            </label>
        </form>
        </div>
      {/* <div>
        <button>Color A</button>
        <button>Color B</button>
      </div> */}
    </div>
)
   
}
