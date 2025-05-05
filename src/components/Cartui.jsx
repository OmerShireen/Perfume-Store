// src/components/Cart.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cartui = ({price,quantity , name ,pic_url,removeItem,addItem,remove_one_Item}) => {
  const cItems = useSelector((state) => state.cart.items)
  const subTotal = cItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div style={{margin:"30px 15px 0",}} className="flex flex-col lg:flex-row justify-between p-8 gap-6">
      {/* Cart Items */}
      <div className="flex gap-4">
        <img
          src={pic_url} // place your image in /public/images/product.png
          alt="product"
          className="w-28 h-28 object-cover"
          width={400}
          height={400}
        />
        <div>
          <h2 className="font-semibold">
           {name}
          </h2>
          <p>
            <span className="font-bold">Size:</span> 12ml
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-2 border w-max px-2 py-1">
            <button className="px-2 text-xl" onClick={remove_one_Item}>-</button>
            <span className="px-4">{quantity}</span>
            <button className="px-2 text-xl" onClick={addItem}>+</button>
          </div>

          <button className="text-sm text-gray-500 mt-2" onClick={removeItem}>Remove</button>
        </div>
      </div>

      {/* Price */}
      <div className="text-xl font-bold mt-4 lg:mt-0">
        Rs.{price}
      </div>

      {/* Sidebar Summary */}
      <div className="bg-gray-100 p-6 rounded w-full lg:w-1/3">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Subtotal</span>
          <span> Rs : {subTotal}</span>
        </div>
<Link to="/">
        <button className="w-full border border-black py-2 rounded-full font-medium "
        style={{color:"white", backgroundColor:"#000000", borderRadius:"5px"}}>
          Continue shopping
        </button>
        </Link>
        <p className="text-sm text-center text-gray-500 mt-4">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default Cartui;