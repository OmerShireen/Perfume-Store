import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ProductList from '../components/Productlist.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
       <ProductList/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
