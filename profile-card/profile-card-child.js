import React from "react";


const Names = (props)=>{

    return (
       <div className="container">
       <div>
            {props.name.last[0]+ props.name.first[0]}
            
        </div>
        </div>
    )
}

export default Names