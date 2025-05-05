import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Cartui from '../components/Cartui.jsx'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,remove_one_Item ,addToCart} from "../redux/slices/cartslice.js";

export default function Cart() {
  const dispatch = useDispatch();
  const cItems = useSelector((state) => state.cart.items)
  return (
    <>
      <div><Navbar /></div>
      <center>
        {
          cItems == "" ? "Your cart is currently empty" :
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
                  addItem={()=> dispatch(addToCart(i))}
                />
              </>)
            })
        }
      </center>
    </>
  )
}
