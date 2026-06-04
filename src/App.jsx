import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='containter'>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
