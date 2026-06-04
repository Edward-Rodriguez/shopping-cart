import { Link } from 'react-router';
import styles from './NavBar.module.css';

export default function NavBar() {
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
          Cart
        </Link>
      </div>
    </div>
  );
}
