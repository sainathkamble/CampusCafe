'use client'
import "../globals.css";
import { useState } from "react";

export default function Items(){
   
   let [orderValue,setOrderValue] = useState(0);

   const addValue = () =>{
    if(orderValue >= 0){
      setOrderValue( orderValue + 1);
     }else{
      orderValue = orderValue;
     }
   }

   const minusValue = () =>{
    if(orderValue > 0){
      setOrderValue( orderValue - 1);
     }else{
      orderValue = orderValue;
     }
   }

    return(
    <>
    <div className="h-[20vh] w-1/4 flex justify-evenly items-center gap-2">
      <button className="h-1/3 w-full rounded-lg text-white font-bold text-lg bg-red-600"
      onClick={minusValue}>
      -</button>

      <p className="h-1/3 w-1/3 flex justify-center items-center text-lg text-white font-semibold">{orderValue}</p>

     <button className="h-1/3 w-full rounded-lg text-white font-bold text-lg bg-green-600"
      onClick={addValue}>
      +</button>
    </div>
    </>
    );
}