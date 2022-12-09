import React from "react";
import Names from "./profile-card-child";
import './profile-card.css'


const name = [
    {first:"Anar", last:"Bayanjargal", title:"General Manager"},
    {first:"Jamiya", last:"Todbilguun", title: "Entrepreneur"},
    {first:"Tony", last:"Stark", title: "Owner Operator"},
    {first:"Adam", last:"Park", title: "Accountant"},
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