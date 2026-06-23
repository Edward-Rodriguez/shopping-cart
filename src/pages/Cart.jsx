import { useCart } from '../context/useCart';
import CartItem from '../components/CartItem/CartItem';

export default function Cart({ productList }) {
  const { cart } = useCart();

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
