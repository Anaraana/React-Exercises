import React from "react";
import Names from "./name-field-child";


const name = [
    {first:"Anar", last:"Bayanjargal"},
    {first:"Jamiya", last:"Todbilguun"},
    {first:"Khuluguu", last:"Bayaraa"},
]

const NameField = ()=>{
    return (
        <div>
            {name.map((name, nameIdx)=>{
                return(
                    <Names name = {name} key = {nameIdx}/>
                )
            })}
        </div>
    )
}

export default NameField