import React from 'react';
import { useCart } from '../context/CartContext';

const ProductModal = () => {
    const { selectedProduct, closeModal, handleAddToCart, showFullDescription, setShowFullDescription } = useCart();

    if (!selectedProduct) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg gap-2 shadow-lg w-full md:w-2/3 lg:w-3/4 xl:w-1/2 flex flex-col md:flex-row relative p-12">
                <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mr-4 transition-transform duration-300 transform hover:scale-105"
                />
                <div className="flex flex-col justify-between w-full">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedProduct.title}</h2>
                        <p className="text-gray-600 mb-2">
                            {selectedProduct.description.length > 100 && !showFullDescription
                                ? `${selectedProduct.description.substring(0, 100)}...`
                                : selectedProduct.description}
                            {selectedProduct.description.length > 100 && (
                                <span
                                    className="text-blue-500 cursor-pointer hover:underline"
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                >
                                    {showFullDescription ? ' Show less' : ' Read more'}
                                </span>
                            )}
                        </p>
                        <p className="text-gray-800 font-semibold text-xl mb-4">${selectedProduct.price}</p>
                    </div>
                    <button
                        onClick={() => handleAddToCart(selectedProduct)}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
                <button
                    className="absolute top-4 right-4 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                    onClick={closeModal}
                    aria-label="Close modal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductModal;
