import { useCart } from '../context/useCart';

export default function Cart({ productList }) {
  const { cart } = useCart();

  return <div>Cart Page</div>;
}
