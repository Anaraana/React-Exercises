import React, { useEffect, useState, createContext, useReducer } from "react";
import axios from "axios";
import "./index.css";
import ProductList from "./product-list";
import CartList from "./cart-list";

const reducer = (curr, action) => {
  console.log(action);
  switch (action.type) {
    case "addToCart":
      return [...curr, action.data];
  }
  return;
};
export const MoviesContext = createContext();
export default function Shoppinglist() {
  const [movies, setMovies] = useState([]);
  const [cart, updateCart] = useReducer(reducer, {
    totalAmount:0,
    totalQty:0,
    totalItemList:[]
  });

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = () => {
    axios
      .get(
        "https://api.bestbuy.com/v1/products?format=json&show=sku,productId,name,type,regularPrice,salePrice,onSale,url,categoryPath,customerReviewAverage,customerReviewCount,department,largeImage,thumbnailImage,quantityLimit,genre,albumTitle,releaseDate,plot&apiKey=j7RQXCsGGeSc5GaXv0slAOAm"
      )
      .then((res) => {
        if (res.status === 200) {
          setMovies(res.data.products);
          console.log(res.data.products);
        }
      })
      .catch((err) => {
        if (err.status == 404) {
          console.log(err);
        }
      })
      .finally(() => {});
  };

  return (
    <div style={{ display: "flex" }}>
      <MoviesContext.Provider value={{ movies, updateCart, cart }}>
        <ProductList />
        <CartList />
      </MoviesContext.Provider>
    </div>
  );
}
