import ProductCard from '../components/ProductCard/ProductCard';
import { useOutletContext } from 'react-router';

export default function Shop() {
  const data = useOutletContext();
  return (
    <div>
      <div className='container'>
        <ul className='cardContainer'>
          {data && data.map((product) => <ProductCard product={product} />)}
        </ul>
      </div>
    </div>
  );
}
