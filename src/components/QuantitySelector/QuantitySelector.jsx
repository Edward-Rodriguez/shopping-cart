import { useCart } from '../../context/useCart';
import styles from './QuantitySelector.module.css';
import DeleteButton from '../../assets/delete.svg';
import IncreaseButton from '../../assets/add.svg';
import DecreaseButton from '../../assets/subtract.svg';

export default function QuantitySelector({ productId }) {
  const { cart, addToCart, removeItem, increaseQuantity, decreaseQuantity } =
    useCart();

  const product = cart.find((product) => product.id === productId);
  const quantity = product ? product.quantity : 0;
  const isInCart = quantity > 0;
  const showDeleteButton = quantity === 1;

  return (
    <div className={styles.btnContainer}>
      {showDeleteButton && (
        <button
          className={styles.deleteBtn}
          onClick={() => removeItem(productId)}>
          <img src={DeleteButton} />
        </button>
      )}
      {quantity > 1 && (
        <button
          className={styles.decreaseBtn}
          onClick={() => decreaseQuantity(productId)}>
          <img src={DecreaseButton} />
        </button>
      )}
      {isInCart && <>{quantity}</>}
      {!isInCart && (
        <button className={styles.addBtn} onClick={() => addToCart(productId)}>
          ADD TO CART
        </button>
      )}
      {isInCart && (
        <button
          className={styles.increaseBtn}
          onClick={() => increaseQuantity(productId)}>
          <img src={IncreaseButton} />
        </button>
      )}
    </div>
  );
}
