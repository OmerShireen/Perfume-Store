import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Cartui from '../components/Cartui.jsx'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, remove_one_Item, addToCart } from "../redux/slices/cartslice.js";
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const cItems = useSelector((state) => state.cart.items)
  return (
    <>
      <div><Navbar /></div>
      <center>
        {
          cItems == "" ?
            <><br />
              <br /><br />            <h1 >Your cart is currently empty</h1>
              <br /><br /><Link to={"/"}>    <button className="w-full border border-black py-2 rounded-full font-medium "
                style={{ color: "white", backgroundColor: "#000000", borderRadius: "5px" }}>Continue Shopping
              </button></Link>
            </> :
            cItems.map((i, index) => {
              return (<>
                <Cartui
                  key={index}
                  name={i.title}
                  price={i.price}
                  pic_url={i.image_url}
                  quantity={i.quantity}
                  remove_one_Item={() => dispatch(remove_one_Item(i))}
                  removeItem={() => dispatch(removeFromCart(i))}
                  addItem={() => dispatch(addToCart(i))}
                />
              </>)
            })
        }
      </center>
    </>
  )
}
