import React from "react";
import CarOwnerChild from "./child";

const owners =[
    {name: 'Anar', carBrand: 'Tesla', carYear: '2023', carColor:'white'},
    {name: 'Jaagii', carBrand: 'Lexus', carYear: '2023', carColor:'black'},
    {name: 'James', carBrand: 'Toyota', carYear: '2023', carColor:'violet'},
]
const CarOwnerParent = ()=>{
    return (
        <div>
            {owners.map((owner, ownerIdx)=>{
                return(
                    <CarOwnerChild owner={owner} idx={ownerIdx} key = {ownerIdx}/>
                )
            })}
        </div>
    )
}
export default CarOwnerParent