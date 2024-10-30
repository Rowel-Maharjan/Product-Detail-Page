import React from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

const ProductList = () => {
    const { products, openModal, handleAddToCart } = useCart();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    openModal={openModal}
                    handleAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
};

export default ProductList;
