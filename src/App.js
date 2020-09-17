import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <ProductList />
      </div>
    );
  }
}

export default App;
