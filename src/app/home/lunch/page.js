import "../../globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import { LUNCHLIST } from "./lunchlist.js";
import { PRODUCTSLIST } from "../products";
import { Product } from "../product";

export default function Lunch(){
    return(
        <>
        <Navbar/> 
          <section className="h-[70vh] w-screen flex justify-center items-center flex-wrap gap-4 p-4 bg-slate-950 overflow-y-scroll custom">
           {PRODUCTSLIST.map((product) =>(
             <Product key={PRODUCTSLIST.id} data={product}/>
           ))}
         </section>
        <Footer/>
        </>
    );
}