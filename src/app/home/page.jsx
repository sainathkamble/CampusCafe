import "../globals.css";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater , faMugHot , faPizzaSlice , faPlateWheat , faBowlFood , faUtensils } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Home(){
    return(
        <>
        <Navbar/>

        <section className="h-[70vh] w-screen flex justify-center items-center flex-wrap gap-4 p-4 bg-slate-950">
        
         {[
           ['1','Drinks' , faBottleWater , './drinks'],
           ['2','Beverages' , faMugHot , '/beverages'],
           ['3','Quickbites' , faPizzaSlice , '/quickbites'],
           ['4','Breakfast' , faPlateWheat , '/breakfast'],
           ['5','Lunch' , faBowlFood , '/lunch'],
           ['6','Dinner' , faUtensils , '/dinner'],
         ].map(([key,category,icon,link]) =>(

          <Link key={key} href={link} className="h-[20vh] w-[40vw] grid grid-cols-1 grid-rows-2 place-items-center rounded-2xl bg-slate-800 hover:bg-slate-700 group">
          <div className="h-3/5 w-3/2 flex justify-center items-center">
           <FontAwesomeIcon icon={icon}
           className="h-full w-full text-white text-4xl group-hover:text-red-600"/>
          </div>
          <p className="h-1/5 w-full flex justify-center items-center font-semibold text-xl text-white group-hover:text-red-600">{category}</p>
         </Link>

         ))}
       </section>
      <Footer/>
    </>
    );
}