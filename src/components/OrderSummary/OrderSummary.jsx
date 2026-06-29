import styles from './OrderSummary.module.css';
import { ensureTwoDecimalPlaces } from '../../utils/pricing';

export default function OrderSummary({ priceBreakdown }) {
  const { subtotal, tax, shipping, discount } = priceBreakdown;
  const total = ensureTwoDecimalPlaces(
    priceBreakdown.subtotal + priceBreakdown.tax + priceBreakdown.shipping,
    -priceBreakdown.discount,
  );

  return (
    <div className={styles.container}>
      <div className={styles.subtotal}>
        <div>Subtotal</div>
        <div className={styles.amount}>${ensureTwoDecimalPlaces(subtotal)}</div>
      </div>
      <div className={styles.shipping}>
        <div>Shipping & Handling</div>
        <div className={styles.amount}>${ensureTwoDecimalPlaces(shipping)}</div>
      </div>
      <div className={styles.tax}>
        <div>Tax</div>
        <div className={styles.amount}>${ensureTwoDecimalPlaces(tax)}</div>
      </div>
      <div className={styles.discount}>
        <div>Discount</div>
        <div className={styles.amount}>
          {priceBreakdown.discount > 0 && <>-</>}$
          {ensureTwoDecimalPlaces(discount)}
        </div>
      </div>
      <br />
      <div className={styles.total}>
        <div>Total</div>
        <div className={styles.amount}>${total}</div>
      </div>
    </div>
  );
}
