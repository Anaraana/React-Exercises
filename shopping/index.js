import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate,Outlet} from "react-router-dom"

const Shop = () => {
  const [drinksMargarita, setDrinksMargarita] = useState([]);
  const navigate = useNavigate()

  const fetchdrinks = (name) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => {
        setDrinksMargarita(res.data.drinks);
        console.log(res.data.drinks)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <div className="cocktails-container">
      {drinksMargarita?.map((margarita,id)=>{
                return <img onClick={()=>{
                    navigate(`${margarita.idDrink}`)
                }} key={id} src={margarita.strDrinkThumb}/>
            })} 

      {["Mojito", "Margarita"].map((name, id) => {
        return (
          <button key={id} onClick={()=>{
            fetchdrinks(name.toLowerCase())
          }}>
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Shop;
