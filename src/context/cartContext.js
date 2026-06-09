import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function removeItem(productIdToRemove) {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productIdToRemove),
    );
  }

  function increaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((prod) =>
        prod.id === productId ? { ...prod, quantity: prod.quantity + 1 } : prod,
      ),
    );
  }

  function decreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((prod) =>
        prod.id === productId ? { ...prod, quantity: prod.quantity - 1 } : prod,
      ),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
