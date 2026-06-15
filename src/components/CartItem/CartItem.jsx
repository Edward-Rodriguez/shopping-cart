import styles from './CartItem.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { useCart } from '../../context/useCart';
import CloseIcon from '../../assets/close.svg';

export default function CartItem({ product }) {
  const { removeItem } = useCart();

  return (
    <li key={product.id} id={product.id} className={styles.card}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.description}
      />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.category}>{product.category}</div>
      <QuantitySelector className={styles.quantityBtn} productId={product.id} />
      <div className={styles.price}>${product.price}</div>
      <button
        className={styles.closeBtn}
        onClick={() => removeItem(product.id)}>
        <img src={CloseIcon} />
      </button>
    </li>
  );
}
