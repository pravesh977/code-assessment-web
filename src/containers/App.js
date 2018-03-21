import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
// import './../../node_modules/react-scripts/template/src/App.css';
import './Styles.css';
const App = () => (
  <div>
    <div className="headersdiv">
      <h2>ACME STORE</h2>
      <CartContainer />
    </div>
    <hr/>
    <ProductsContainer />
    <h1><i className="fas fa-shopping-cart"></i></h1>
    <hr/>
  </div>
)

export default App
