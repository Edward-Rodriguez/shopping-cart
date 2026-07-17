import { Link } from 'react-router';
import styles from './NavBar.module.css';
import { useCart } from '../../context/useCart';

export default function NavBar() {
  const { getTotalItemCount } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.leftnav}>
        <Link to='/' className={styles.link}>
          Home
        </Link>
        <Link to='/shop' className={styles.link}>
          Shop
        </Link>
      </div>
      <div className={styles.rightnav}>
        <Link to='/cart' className={styles.link}>
          Cart ({getTotalItemCount() > 0 ? <>{getTotalItemCount()}</> : 0})
        </Link>
      </div>
    </div>
  );
}
