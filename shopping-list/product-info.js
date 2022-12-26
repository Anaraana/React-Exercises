import React,{useReducer, useContext} from "react";
import {FaShoppingCart} from 'react-icons/fa';
import "./index.css";
import { MoviesContext } from ".";



export default function ProductInfo({movie,}){
    const {movies,updateCart}=useContext(MoviesContext)
   
return(
    <div className="best-buy-shopping-list">
            <div className="best-buy-picture">
            <img className="best-buy-picture" src={movie.largeImage}/>
            </div>
            <div className="best-buy-movie-detail">
            
            <div>{movie.name}</div>
            <span><b>SKU:</b> {movie.sku}</span>
            <span><b>Release Date:</b>{movie.releaseDate}</span>
            <span><b>Rating:</b> {movie.customerReviewAverage}</span>
            <div>
            <span>{movie.customerReviewAverage}/5</span>
            <span>({movie.customerReviewCount})</span>
            </div>
            {/* <div>{movie.plot}</div> */}
            </div>
            <div className="shopping-price">
                <div><h1>${movie.regularPrice}</h1></div>
                {/* <div>
                    <span>{`${movie.regularPrice}-${movie.salePrice}`}</span>
                    <span>${movie.salePrice}</span>
                </div> */}
        
                    <button className="shopping-btn" onClick={()=>{updateCart({type:'add', data:{sku:movie.sku, name:movie.name,thumbnailImage:movie.thumbnailImage}})}}><FaShoppingCart/>Add to Cart</button>
                
            </div>
        </div>
)

}
 