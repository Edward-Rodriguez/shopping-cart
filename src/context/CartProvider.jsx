import { useState } from 'react';
import { CartContext } from './cartContext';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(productId) {
    setCart((prevCart) => [...prevCart, { id: productId, quantity: 1 }]);
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

  function getTotalItemCount() {
    return cart.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        getTotalItemCount,
      }}>
      {children}
    </CartContext.Provider>
  );
}
