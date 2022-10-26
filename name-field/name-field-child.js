import React from "react";

const Names = (props)=>{

    return (
        <div>
            {props.name.last[0]+ ". "+ props.name.first}
            
        </div>
    )
}

export default Names