import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
      <ProductCard/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
