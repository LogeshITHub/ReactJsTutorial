import React from 'react'
import ProductDescription from './ProductDescription'

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">Product: {product.Item}</h3>
          <p className="product-price">Price: {product.Price}</p>
          <p className="product-description">{product.Description}</p>
          <ProductDescription Item={product.Item} Price={product.Price} Description={product.Description}/>
          --------------------------------------------------------------
        </div>
      ))}
    </div>
  )
}

export default ProductList
