import { useCart } from '../../context/useCart';
import styles from './QuantitySelector.module.css';

export default function QuantitySelector() {
  return (
    <div className={styles.btnContainer}>
      <button>ADD TO CART</button>
    </div>
  );
}
