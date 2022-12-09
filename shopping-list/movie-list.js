import React from "react";
import {FaShoppingCart} from 'react-icons/fa';
import "./index.css"
export default function ProductInfo({movie}){
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
        
                    <button className="shopping-btn" onClick={(()=>{})}><FaShoppingCart/>Add to Cart</button>
                
            </div>
        </div>
)

}
 