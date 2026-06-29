import styles from './CartItem.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { useCart } from '../../context/useCart';
import CloseIcon from '../../assets/close.svg';
import { ensureTwoDecimalPlaces } from '../../utils/pricing';

export default function CartItem({ product }) {
  const { removeItem } = useCart();

  return (
    <li key={product.id} id={product.id} className={styles.card}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.description}
      />
      <div className={styles.titleCategory}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.category}>{product.category}</div>
      </div>
      <div className={styles.quantityBtn}>
        <QuantitySelector productId={product.id} />
      </div>
      <div className={styles.price}>
        ${ensureTwoDecimalPlaces(product.price)}
      </div>
      <button
        className={styles.closeBtn}
        onClick={() => removeItem(product.id)}>
        <img src={CloseIcon} />
      </button>
    </li>
  );
}
