import "../globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Indexpg(){
    return(
        <>
        <section className="h-screen w-screen bg-black grid grid-cols-1 grid-rows-3 place-items-center gap-4 p-8">
         <div className="h-ful w-screen grid grid-cols-1 grid-rows-2 place-items-center p-4">
           <p className="text-2xl text-white">Order Now</p>
           <p className="text-xl text-white">Browse,Select,Add to Cart,Order,Pay</p>
         </div>
 
          <Image className="bg-cover" height={300} width={300}
          src="./index.png" alt="Index image"></Image>

          <Link href="./home" 
           className="h-[8vh] w-2/3 bg-red-600 flex justify-center items-center text-white text-2xl font-bold rounded-2xl">
           Order
          </Link>
       </section>
     </>
    );
}