// import React, { useContext } from "react";
// import { MyContext } from "./context/shop-context";

// export const CartItem = (props) => {
//   const { id, item, price, img } = props.data;

//   const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
//     useContext(MyContext);

//   return (
//     <div className="cartItem">
//       <div className="description">
//         <p>
//           <b>{item}</b>
//         </p>
//         <p> Price: ${price}</p>
//         <div className="countHandler">
//           <button onClick={() => removeFromCart(id)}> - </button>
//           <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//           />
//           <button onClick={() => addToCart(id)}> + </button>
//         </div>
//       </div>
//     </div>
//   );
// };
