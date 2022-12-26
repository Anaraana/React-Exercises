import React, {useContext} from "react";
import "./index.css";
import { MoviesContext } from ".";

export default function CartInfo({item}){
    const {movies,updateCart}=useContext(MoviesContext)

    return(
        <div>test</div>
    )
}