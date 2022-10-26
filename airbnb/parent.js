import React from "react";
import SmallComponent from "./child";

const houses = [
  {
    img:"./image/img1.webp",
    location: "Villa in Malibu",
    miles: "430 miles away",
    price: "$3962 night",
    rate: "4.75",
    date: "Oct 23-29",
  },
  {
    img:"./image/img2.webp",
    location: "Blowing Rock, North Carolina",
    miles: "508 miles away",
    price: "$2000 night",
    rate: "4.75",
    date: "Nov 27- Dec 3",
  },
  {
    img:"./image/img3.webp",
    location: "Beverly Hills Maison ",
    miles: "1,751 miles away",
    price: "$2036 night",
    rate: "5.0",
    date: "Oct 22-27",
  },
  {
    img:"./image/img4.webp",
    location: "North Lawrence, Ohio",
    miles: "321 miles away",
    price: "$995 night",
    rate: "4.92",
    date: "Oct 30- Nov 4",
  },
  {
    img:"./image/img5.webp",
    location: "Middleburg, Virginia",
    miles: "554 miles away",
    price: "$2,000 night",
    rate: "4.94",
    date: "Oct 20-25",
  }
  
];

const Airbnb = () => {
    return (
      <div className="main">
    
        {houses.map((house, houseIdx) => {
          return < SmallComponent house={house} /*key= {houseIdx}*/  />;
        })}
      </div>
    );
  };

export default Airbnb;
