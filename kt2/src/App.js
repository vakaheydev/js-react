import React from 'react';
import CartProvider from './components/AppContext';
import './App.css';
import ProductItem from './components/ProductItem';
import AddProductItem from './components/AddProductItem';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductItem /> 
        <AddProductItem /> 
      </CartProvider>
    </div>
  );
}

export default App;
