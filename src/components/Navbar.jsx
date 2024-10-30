import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { toggleCart, cartItems } = useCart();

    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50 mb-5">
            <h1 className="text-xl font-bold">Product Store</h1>
            <button className="relative" onClick={toggleCart}>
                <FaShoppingCart className="text-2xl" />
                {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                        {cartItems.length}
                    </span>
                )}
            </button>
        </nav>
    );
};

export default Navbar;
