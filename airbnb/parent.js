import React from "react";
import SmallComponent from "./child";
import "./air-bnb.css";
import image1 from "./image/img1.webp";
import image2 from "./image/img2.webp";
import image3 from "./image/img3.webp";
import image4 from "./image/img4.webp";
import image5 from "./image/img5.webp";

const houses = [
  {
    img: image1,
    location: "Villa in Malibu",
    miles: "430 miles away",
    price: "$3962 ",
    rate: "4.75",
    date: "Oct 23-29",
  },
  {
    img: image2,
    location: "Blowing Rock, North Carolina",
    miles: "508 miles away",
    price: "$2000 ",
    rate: "4.75",
    date: "Nov 27- Dec 3",
  },
  {
    img: image3,
    location: "Beverly Hills Maison ",
    miles: "1,751 miles away",
    price: "$2036 ",
    rate: "5.0",
    date: "Oct 22-27",
  },
  {
    img: image4,
    location: "North Lawrence, Ohio",
    miles: "321 miles away",
    price: "$995 ",
    rate: "4.92",
    date: "Oct 30- Nov 4",
  },
  {
    img: image5,
    location: "Middleburg, Virginia",
    miles: "554 miles away",
    price: "$2,000 ",
    rate: "4.94",
    date: "Oct 20-25",
  },
];

const AirBnb = () => {
  return (
    <div className="main">
      {houses.map((house, houseIdx) => {
        return <SmallComponent house={house} key={houseIdx} />;
      })}
    </div>
  );
};

export default AirBnb;
