import React from "react";
import { useState,useContext } from "react";
import { MoviesContext } from ".";
import CartInfo from "./cart-info";



export default function CartList(){
    const {cart,updateCart}=useContext(MoviesContext)

    return (
        <div>
          {cart?.map((item, itemId) => {
            return <CartInfo key={itemId} item={item} />;
          })}
        </div>
      );

}