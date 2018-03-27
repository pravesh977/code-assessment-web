import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import './Styles.css';
  class App extends Component {
    constructor() {
      super();
      this.state = {
        slideclass: 'oldclass',
      }
      this.onCartClick = this.onCartClick.bind(this);
    }

    onCartClick() {
      if(this.state.slideclass === 'oldclass') {
        this.setState({
          slideclass: 'newclasscart',
        })
      }
      else {
        this.setState({
          slideclass: 'oldclass'
        })
      }
      // console.log(this.state.itemsDisplay)
    }

    render() {
      return (
        <div>
          <div className="headersdiv">
            <h2>STORE</h2>
            <div className="cartDiv">
              <span onClick={this.onCartClick}><i className="fas fa-shopping-cart"></i></span>
              <div className={this.state.slideclass}>
                <CartContainer />
              </div>
            </div>
          </div>
        <hr/>
        <ProductsContainer />
        <hr/>
        </div>
      )
    }
  }

export default App;