import "../globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import React, { useContext } from "react";
// import { MyContext } from "../context/shop-context";
// import { PRODUCTS } from "../home/products";
// import { CartItem } from "./order.js";
import { useNavigate } from "react";

export default function Order(){

  // const { cartItems, getTotalCartAmount, checkout } = useContext(MyContext);
  // const totalAmount = getTotalCartAmount();

  //const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <section className="h-[70vh] w-screen flex justify-center items-center flex-wrap gap-4 p-4 bg-slate-950">
    <div className="cart">
      <div>
        <h1>Your Ordered Food</h1>
      </div>
      <div className="h-auto w-screen flex justify-center items-center flex-wrap gap-4 p-4">
        {/* {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={PRODUCTS.id} data={product} />;
          }
        })} */}
      </div>

      {/* {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal:  </p>
          <button onClick={() => navigate("/home")}> Continue Ordeing </button>
          <button
            onClick={() => {
               checkout();
              navigate("/checkout");
            }}
          >
            {" "}Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )} */}
    </div>
    </section>
    <Footer/>
    </>
  );
};
