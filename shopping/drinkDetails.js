import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';

const DrinkDetails = ()=> {
    const {idDrink} = useParams()
    const [drink, setDrink]= useState({})
    
    
    
    useEffect(()=> {
        axios.get (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then((res)=>{setDrink((curr)=>{
            return {...curr, ...res.data.drinks}
        })})
        .catch((err)=>{})
        .finally(()=>{})
    }, [])

    console.log(drink)

    return <div>
        <div>{drink[0].strDrink}</div>
        {/* <img src={drink[].strDrinkThumb} /> */}
        <div>{drink?.ingredient1}</div>
        <div>{drink?.ingredient2}</div>
        <div>{drink?.ingredient3}</div>
        <div>{drink?.ingredient4}</div>
        <div>{drink?.ingredient5}</div>
    </div>
}

export default DrinkDetails