import Image from "next/image";
import { MyContext } from "../context/contextapi";
import { PRODUCTSLIST } from "./products";
import React , { useContext } from "react";

export const Product = (props) => {

   const { id, item, price, img } = props.data;

  // const { addToCart , cartItems} = useContext(MyContext);

  // const cartItemCount = cartItems[id];

  return (
    <div key={id} className="h-1/3 w-full flex justify-between items-center p-4 rounded-lg bg-slate-900 hover:bg-slate-800
    sm:w-full md:w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4">

     <Image src={img} alt="Product" className="h-full w-1/3 rounded-lg"/>

      <div className="h-full w-1/3 p-2 text-white text-lg">

        <p className="h-auto w-full">
          <b>{item}</b>
        </p>
        <p className="h-auto w-full"> Rs. {price}</p>

      </div>

      <button className="h-auto w-1/4 flex justify-center items-center p-2 rounded-lg text-white text-lg bg-red-600 hver:bg-red-500" >
        Add To Order 
        {/* {cartItemCount > 0 && <> ({cartItemCount})</>} */}
      </button>

    </div>
  );
};

export default Product;