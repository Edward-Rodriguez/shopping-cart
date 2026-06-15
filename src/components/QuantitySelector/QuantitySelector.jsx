import { useCart } from '../../context/useCart';
import styles from './QuantitySelector.module.css';
import DeleteIcon from '../../assets/delete.svg';
import IncreaseIcon from '../../assets/add.svg';
import DecreaseIcon from '../../assets/subtract.svg';

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
          <img src={DeleteIcon} />
        </button>
      )}
      {quantity > 1 && (
        <button
          className={styles.decreaseBtn}
          onClick={() => decreaseQuantity(productId)}>
          <img src={DecreaseIcon} />
        </button>
      )}
      {isInCart && <span className={styles.itemCount}>{quantity}</span>}
      {!isInCart && (
        <button className={styles.addBtn} onClick={() => addToCart(productId)}>
          <span>ADD TO CART</span>
        </button>
      )}
      {isInCart && (
        <button
          className={styles.increaseBtn}
          onClick={() => increaseQuantity(productId)}>
          <img src={IncreaseIcon} />
        </button>
      )}
    </div>
  );
}
