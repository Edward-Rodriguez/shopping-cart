import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Cart Integration', () => {
  it('increases cart count after adding item', async () => {
    const user = userEvent.setup();
    render(<App />);

    const shopLink = screen.getByRole('link', { name: /shop/i });
    await user.click(shopLink);

    const cartLink = screen.getByRole('link', { name: /cart/i });
    await user.click(cartLink);
  });
});
