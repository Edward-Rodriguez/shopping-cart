import { describe, it, expect } from 'vitest';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../tests/test-utils';

describe('Cart Integration', () => {
  it('increases cart count after adding item', async () => {
    const user = userEvent.setup();
    renderApp();

    const shopLink = await screen.findByRole('link', { name: /shop/i });
    await user.click(shopLink);

    const productCards = screen.getAllByRole('listitem');
    for (const productCard of productCards) {
      const addToCartButton = within(productCard).getByRole('button', {
        name: /add to cart/i,
      });
      await user.click(addToCartButton);
    }

    const cartLink = screen.getByRole('link', { name: /cart.*$/i });
    console.log('cart text = ' + cartLink.textContent);

    expect(cartLink.textContent).toMatch(/.*20.*$/i);
  });
});
