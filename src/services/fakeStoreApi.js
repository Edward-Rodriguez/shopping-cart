import { useEffect, useState } from 'react';

const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (response.status >= 400) {
          throw new Error('server error');
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
};

export default useData;
