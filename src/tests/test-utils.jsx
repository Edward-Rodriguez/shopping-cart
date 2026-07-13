import { render } from '@testing-library/react';
import routes from '../routes.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import CartProvider from '../context/CartProvider.jsx';

const router = createBrowserRouter(routes);

function customRender() {
  render(
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>,
  );
}

export { customRender as renderApp };
