import { useCart } from '../context/useCart';
import CartItem from '../components/CartItem/CartItem';
import { useOutletContext } from 'react-router';

export default function Cart() {
  const { cart } = useCart();
  const productList = useOutletContext();

  return (
    <div className='container'>
      <h1>My Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <CartItem product={productList.find((prod) => prod.id === item.id)} />
        ))}
      </ul>
    </div>
  );
}
