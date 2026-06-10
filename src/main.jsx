import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import routes from './routes.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import CartProvider from './context/CartProvider.jsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
