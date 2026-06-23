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
    <div className='container'>
      <NavBar />
      <Outlet context={data} />
    </div>
  );
}

export default App;
