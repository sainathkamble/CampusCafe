'use client'
import "../globals.css";
import { useState } from "react";

export default function Items(){

    let [itemnum , setItemnum] = useState(0);

    return(
    <>
    <div className="h-full w-1/4 flex justify-evenly items-center gap-2">
               <button className="h-1/3 w-full rounded-lg text-white font-bold text-lg bg-red-600"
                onClick={ () =>{
                  if(itemnum > 0){
                    setItemnum(itemnum-1);
                  }else{
                    itemnum = itemnum;
                  }}}>-</button>

                 <p className="h-1/3 w-1/3 flex justify-center items-center text-lg text-white font-semibold">{itemnum}</p>

                 <button className="h-1/3 w-full rounded-lg text-white font-bold text-lg bg-green-600"
                 onClick={() =>{
                  if(itemnum >= 0){
                    setItemnum(itemnum+1);
                  }else{
                    itemnum = itemnum;
                  }
                 }}>+</button>
   </div>
    </>
    );
}