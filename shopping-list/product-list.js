import React, { useContext } from "react";
import { MoviesContext } from ".";
import ProductInfo from "./product-info";




export default function ProductList(){
    const {movies}=useContext(MoviesContext)
    
        return (
            <div>
              {movies.map((movie, movieId) => {
                return <ProductInfo key={movieId} movie={movie} />;
              })}
            </div>
          );
    
}