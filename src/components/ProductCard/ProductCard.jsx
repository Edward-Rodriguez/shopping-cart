import styles from './ProductCard.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

export default function ProductCard({ product }) {
  return (
    <li key={product.id} className={styles.card}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.description}
      />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.category}>{product.category}</div>
      <div className={styles.price}>${product.price}</div>
      <div className={styles.description}>{product.description}</div>
      <QuantitySelector className={styles.quantityBtn} />
    </li>
  );
}
