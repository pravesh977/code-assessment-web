import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
// import './../../node_modules/react-scripts/template/src/App.css';
import './Styles.css';
// const App = () => (
  class App extends Component {
    constructor() {
      super();
      this.state = {
        itemsDisplay: 'none',
      }
      this.onCartClick = this.onCartClick.bind(this);
    }

    onCartClick() {
      if(this.state.itemsDisplay === 'none') {
        this.setState({
          itemsDisplay: 'block',
        })
      }
      else {
        this.setState({
          itemsDisplay: 'none'
        })
      }
      console.log(this.state.itemsDisplay)
      console.log("hey hey")
    }

    render() {
      return (
        <div>
          <div className="headersdiv">
            <h2>STORE</h2>
            <div className="cartDiv">
              <span onClick={this.onCartClick}><i className="fas fa-shopping-cart"></i></span>
              <div style={{ display: this.state.itemsDisplay }}>
                <CartContainer />
              </div>
            </div>
          </div>
        <hr/>
        <ProductsContainer />
        {/* <button
          onClick={this.onCartClick}>
          PLAY THAT SHIT
       </button> */}
        {/* <h2>hello, <i className="fas fa-shopping-cart"></i></h2> */}
        <hr/>
        </div>
      )
    }
  }

// export default App
export default App;