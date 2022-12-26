import React, {useContext} from "react";
import { ExampleContext } from ".";

export default function UseAccount(){
    const {firstName}= useContext(ExampleContext)
    return(
        <div>
            {firstName}
        </div>
    )
    
}