import React from 'react'

//Default Props
const ProductDescription = ({Item="SUMSANG",Price=100,Description="Simple Description"}) => {

    const generateSummary = () => {
        return `Discover the exceptional ${Item}, available now for just ${Price}. ${Description}. It's more than a product—it's a statement.`
    }
    return (
    <div className="product-description-box">
      <p>{generateSummary()}</p>
    </div>
  )
}

export default ProductDescription