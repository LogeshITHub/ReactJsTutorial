import React, { useState } from 'react'
import ProductList from './ProductList'
import './Shop.css' // Import the stylesheet

const Shop = () => {
  const [products, SetProducts] = useState([
    {
      id: 1,
      Item: "iPhone",
      Price: "$999",
      Description: "Branded item that reflects your prestige",
    },
    {
      id: 2,
      Item: "Samsung Galaxy",
      Price: "$799",
      Description: "Android powerhouse with premium features",
    },
    {
      id: 3,
      Item: "Google Pixel",
      Price: "$699",
      Description: "Clean Android experience with top-notch camera",
    },
  ])

  return (
    <div className="shop-container">
      <h1 className="shop-title">---➤➤-----Product List----------</h1>
      <ProductList products={products} />
    </div>
  )
}

export default Shop
