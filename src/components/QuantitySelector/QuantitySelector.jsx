import { useCart } from '../../context/useCart';
import styles from './QuantitySelector.module.css';
import DeleteIcon from '../../assets/delete.svg';
import IncreaseIcon from '../../assets/add.svg';
import DecreaseIcon from '../../assets/subtract.svg';
import { useState } from 'react';

export default function QuantitySelector({ productId }) {
  const { cart, addToCart, removeItem, increaseQuantity, decreaseQuantity } =
    useCart();

  const product = cart.find((product) => product.id === productId);
  const quantity = product ? product.quantity : 0;
  const isInCart = quantity > 0;
  const showDeleteButton = quantity === 1;
  const [active, setActive] = useState(isInCart);

  return (
    <div
      className={
        active ? styles.active + ' ' + styles.btnContainer : styles.btnContainer
      }>
      {showDeleteButton && (
        <button
          className={styles.deleteBtn}
          aria-label='Remove item'
          onClick={() => {
            (removeItem(productId), setActive(false));
          }}>
          <img src={DeleteIcon} />
        </button>
      )}
      {quantity > 1 && (
        <button
          className={styles.decreaseBtn}
          aria-label='Decrement quantity'
          onClick={() => decreaseQuantity(productId)}>
          <img src={DecreaseIcon} />
        </button>
      )}
      {isInCart && <span className={styles.itemCount}>{quantity}</span>}
      {!isInCart && (
        <button
          className={styles.addBtn}
          aria-label='Add to cart'
          onClick={() => {
            (addToCart(productId), setActive(true));
          }}>
          <span>ADD TO CART</span>
        </button>
      )}
      {isInCart && (
        <button
          className={styles.increaseBtn}
          aria-label='Increment quantity'
          onClick={() => increaseQuantity(productId)}>
          <img src={IncreaseIcon} />
        </button>
      )}
    </div>
  );
}
