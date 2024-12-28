import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/Productlist'
import Footer from '../components/Footer'

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
