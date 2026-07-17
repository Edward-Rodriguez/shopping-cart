import { useCart } from '../context/useCart';
import CartItem from '../components/CartItem/CartItem';
import { useOutletContext } from 'react-router';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import styles from './Cart.module.css';

export default function Cart() {
  const { cart } = useCart();
  const productList = useOutletContext();

  function getSubtotal() {
    if (cart.length === 0) return 0;
    return cart.reduce((total, currentItem) => {
      const product = productList.find((item) => item.id === currentItem.id);
      return total + currentItem.quantity * product.price;
    }, 0);
  }

  function computeShipping() {
    let shipping = 0;
    if (cart.length > 0) shipping = 5.99;
    return shipping;
  }

  function computeTax(taxRate) {
    const tax = getSubtotal() * taxRate;
    return tax;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <OrderSummary
        className={styles.summary}
        priceBreakdown={{
          subtotal: getSubtotal(),
          shipping: computeShipping(),
          tax: computeTax(0.08875),
          discount: 0,
        }}
      />
      <ul className={styles.list} aria-label='Cart list'>
        {cart.map((item) => (
          <CartItem product={productList.find((prod) => prod.id === item.id)} />
        ))}
      </ul>
    </div>
  );
}
