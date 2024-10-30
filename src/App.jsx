import React from 'react';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import ProductModal from './components/ProductModal';
import ProductList from './components/ProductList';

const App = () => {

    return (
        <div className="App container mx-auto p-6 relative">
            <Navbar />
            <ProductList />
            <CartSidebar />
            <ProductModal />
        </div>
    );
};

export default App;
