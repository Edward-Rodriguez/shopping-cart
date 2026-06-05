import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import useData from './services/fakeStoreApi';

function App() {
  const { data, loading, error } = useData();

  if (loading) return <p className='loading-text'>Loading...</p>;
  if (error)
    return (
      <p className='error-text'>
        A network error was encountered. Error: {error.message}
      </p>
    );

  return (
    <div className='containter'>
      <NavBar />
      <Outlet />

      <ul>
        {data &&
          data.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.description} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
