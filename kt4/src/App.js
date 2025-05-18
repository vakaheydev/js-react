import React from 'react';
import './App.css';
import ProductItem from './components/ProductItem';
import AddProductItem from './components/AddProductItem';

function App() {
    return (
        <div className="App">
            <ProductItem />
            <AddProductItem />
        </div>
    );
}

export default App;
