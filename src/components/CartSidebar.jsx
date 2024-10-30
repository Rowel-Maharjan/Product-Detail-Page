import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
    const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, calculateTotal } = useCart();

    return (
        <div className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-50 transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden`}>
            <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
                    <button onClick={toggleCart} className="text-blue-500">Close</button>
                </div>
                <div className="overflow-y-auto h-[73vh] scrollbar-hide mt-4">
                    {cartItems.length === 0 ? (<p className="text-gray-600 text-center py-6">Your cart is empty</p>):(
                        cartItems.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-4 border-b">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600">${item.price}</p>
                                        <div className="mt-2 flex items-center">
                                            <span className="text-gray-700 mr-2">Qty:</span>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className="border rounded-lg w-16 text-center px-2 py-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-all duration-300"> Remove</button>
                            </div>
                        ))
                    )}
                </div>

                <div className="mt-4 flex justify-between items-center font-bold text-gray-800">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 w-full font-medium transition-all duration-300">Buy Now</button>


            </div>
        </div>
    );
};

export default CartSidebar;
