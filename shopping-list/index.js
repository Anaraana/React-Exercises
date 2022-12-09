import React, { useEffect, useState } from "react";
import axios from 'axios';
import shoppingCart from "./shopping-cart";
import "./index.css"
import ProductInfo from './movie-list'

export default function  Shoppinglist(){
    const [movies, setMovies]=useState([])
useEffect(()=>{
fetchMovies()
},[])
   const fetchMovies = ()=>{
   
    axios
    .get ('https://api.bestbuy.com/v1/products?format=json&show=sku,productId,name,type,regularPrice,salePrice,onSale,url,categoryPath,customerReviewAverage,customerReviewCount,department,largeImage,genre,albumTitle,releaseDate,plot&apiKey=j7RQXCsGGeSc5GaXv0slAOAm')
    .then ((res)=>{
        setMovies(res.data.products)
console.log(res.data.products)
    })
    .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
   }
 
   return <div>
    {movies?.map((movie,movieId)=>{
        return  (
            <ProductInfo key={movieId} movie={movie}/>
        )
    })}
   </div>
}
