import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, imagelink }) => (
  <div className="mainProductDiv">
     <img src={imagelink} alt={title}/>
     <p className="producttitle">{title}</p> 
     <p className="productprice">&#36;{price}</p>{inventory ? <p className="productavailability"> Available:  {inventory}</p> : null }
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
