import React from "react";

const CarOwnerChild = ({owner:{name,carBrand,carColor,carYear}, idx})=> {
    return (
        <div>
            {name}
            {carBrand}
            {carYear}
            {carColor}
        </div>
    )
}
export default CarOwnerChild