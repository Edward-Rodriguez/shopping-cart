import { createContext, useState } from 'react';

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
        prod.id === productId ? (prod.quantity += 1) : prod,
      ),
    );
  }

  function decreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((prod) =>
        prod.id === productId ? (prod.quantity -= 1) : prod,
      ),
    );
  }

  return (
    <CartContext
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}>
      {children}
    </CartContext>
  );
}
