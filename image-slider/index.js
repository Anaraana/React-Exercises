import React,{useState} from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./index.css"
const collection = [
    {image:  "https://www.discovermongolia.mn/uploads/summer_cover.jpg" },
    {image:"https://static.thousandwonders.net/Mongolia.original.3147.jpg"}, 
    {image: "https://mongolia-travel-hostel-zaya.com/wp-content/uploads/2019/08/Melkhii-khad-1024x681.jpg"},
    {image:"https://www.toursmongolia.com/uploads/Amazing_landscape_naiman_lake_bayar.jpg"},
    {image:"https://terres-sauvages.ch/wp-content/uploads/2020/04/pleinenature.jpg"},
    {image: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/F_F20MONGOLIA_3A.jpg?crop=0%2C6%2C4000%2C2657&wid=828&hei=550&scl=4.830917874396135"},
    {image: "https://www.chinadiscovery.com/assets/images/inner-mongolia/gallery/autumn/inner-mongolia-autumn-20.jpg"} ,
    {image: "https://www.toursmongolia.com/uploads/5c99d01b-9bb0-4253-93f3-4c00a2f1e629-autumn%20in%20mongolia.jpg"}
]


export default function  ImageSlider(){

const [ imageIdx, setImageIdx]=useState(0)
const [ imagelist, setImagelist]=useState(collection)

    return(
       
        <div className="container-slider">
            <h1><b>Mongolian Beatiful Nature</b></h1>
             <img style={{width:'600px', height:"600px"}} className="collection" key={imageIdx} src={collection[imageIdx].image} alt="" />
         
                <button className="btn-slider-1" onClick={(()=>{
                    setImageIdx((currState)=>{
                        
                        return currState===0 ? imagelist.length-1 : currState-1
                    })

                })}  ><FaArrowAltCircleLeft/></button>
                <button className="btn-slider-2" onClick={(()=>{
                    setImageIdx((currState)=>{
                        return currState===imagelist.length-1 ? 0: currState+1
                    })
                })} 
                      ><FaArrowAltCircleRight /></button>
        </div>
  
         )
     }
     




