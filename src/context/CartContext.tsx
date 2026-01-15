import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../data/products';
export interface CartItem extends Product {
  quantity: number;
}
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({
  children
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from local storage');
      }
    }
  }, []);
  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product: Product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => item.id === product.id ? {
          ...item,
          quantity: item.quantity + quantity
        } : item);
      }
      return [...prevItems, {
        ...product,
        quantity
      }];
    });
  };
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prevItems => prevItems.map(item => item.id === productId ? {
      ...item,
      quantity
    } : item));
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  return <CartContext.Provider value={{
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  }}>
      {children}
    </CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}