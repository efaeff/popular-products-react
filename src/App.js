import React, { Component } from 'react';
import { ProductList } from './ProductList';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList />
      </div>
    );
  }
}

export default App;
