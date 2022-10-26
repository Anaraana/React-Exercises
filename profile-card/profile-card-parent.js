import React from "react";
import Names from "./profile-card-child";


const name = [
    {first:"Anar", last:"Bayanjargal", job:"General Manager"},
    {first:"Jamiya", last:"Todbilguun"},
    {first:"Khuluguu", last:"Bayaraa"},
]

const ProfileCard = ()=>{
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

export default ProfileCard