import React from 'react';

const ProductCard = ({ product, openModal, handleAddToCart }) => {
    return (
        <div
            className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col justify-between h-full w-full max-w-xs relative cursor-pointer"
            onClick={() => openModal(product)}
        >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover mb-4 rounded-lg"
            />
            <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">{product.title}</h2>
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={i < Math.round(product.rating.rate) ? 'currentColor' : 'none'}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                    <span className="text-gray-600 text-sm ml-2">({product.rating.count})</span>
                </div>
                <p className="text-gray-800 font-semibold text-lg mb-2">${product.price}</p>
                <p className="text-gray-600 mb-4">{product.description.length > 60 ? `${product.description.substring(0, 60)}...` : product.description}</p>
            </div>
            <button
                onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                className="bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 w-full font-medium transition-all duration-300"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
