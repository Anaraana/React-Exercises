import React from "react";
import { useContext } from "react";
import { ExampleContext } from ".";



export default function SomeLabel(){
    const {firstName}=useContext(ExampleContext)
    return(
        <div>{firstName}</div>  
    )
 
}