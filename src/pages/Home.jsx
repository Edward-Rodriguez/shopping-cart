import { Link } from 'react-router';
import styles from './Home.module.css';

export default function Home() {
  const baseImageUrl =
    'https://res.cloudinary.com/do89l9smc/image/upload/f_auto,q_auto,';
  const imageId = '/v1783019844/guy-basabose-EoqOVrMgmSA-unsplash_k0bkij.jpg';
  return (
    <div className={styles.container}>
      <img
        src={`${baseImageUrl}w_800${imageId}`}
        srcSet={`${baseImageUrl}w_400${imageId} 400w,
                  ${baseImageUrl}w_800${imageId} 800w,
                  ${baseImageUrl}w_1200${imageId} 1200w,
                  ${baseImageUrl}w_1600${imageId} 1600w,
                  `}
        sizes='100vw'
        alt='Brown beach umbrella on white sand beside turquoise water.'
      />
      <div className={styles.header}>
        <h3 className={styles.subheading}>LIMITED TIME ONLY</h3>
        <h2 className={styles.shopPhrase}>SUMMER SALE</h2>
        <Link className={styles.link} to='/shop'>
          EXPLORE THE COLLECTION
        </Link>
      </div>
    </div>
  );
}
