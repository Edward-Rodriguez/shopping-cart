import ProductCard from '../components/ProductCard/ProductCard';
import { useOutletContext } from 'react-router';
import styles from './Shop.module.css';

export default function Shop() {
  const data = useOutletContext();
  return (
    <div className={styles.shopContainer}>
      <ul className={styles.productCardContainer}>
        {data && data.map((product) => <ProductCard product={product} />)}
      </ul>
    </div>
  );
}
