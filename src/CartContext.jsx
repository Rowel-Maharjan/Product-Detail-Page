import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const openModal = (product) => {
        setSelectedProduct(product);
        setShowFullDescription(false);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item => 
                item.id === product.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
        } else {
            setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{
            products,
            cartItems,
            isCartOpen,
            selectedProduct,
            showFullDescription,
            toggleCart,
            openModal,
            closeModal,
            handleAddToCart,
            updateQuantity,
            removeFromCart,
            setShowFullDescription,
        }}>
            {children}
        </CartContext.Provider>
    );
};
