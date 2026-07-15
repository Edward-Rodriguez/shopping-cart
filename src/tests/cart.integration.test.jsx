import { describe, it, expect, beforeEach } from 'vitest';
import { getByRole, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../tests/test-utils';

describe('Cart Integration', () => {
  let user;
  let shopLink;
  let cartLink;
  let productCards;

  beforeEach(async () => {
    user = userEvent.setup();
    renderApp();
    shopLink = await screen.findByRole('link', { name: /shop/i });
    await user.click(shopLink);
    productCards = screen.getAllByRole('listitem');
    cartLink = screen.getByRole('link', { name: /cart.*$/i });
  });

  it('increases cart count after adding item', async () => {
    for (const productCard of productCards) {
      const addToCartButton = within(productCard).getByRole('button', {
        name: /add to cart/i,
      });
      await user.click(addToCartButton);
    }
    console.log('cart text = ' + cartLink.textContent);
    expect(cartLink.textContent).toMatch(/.*20.*$/i);
  });

  it('decreases cart count after lowering qty', async () => {
    renderApp();

    const productOne = productCards[0];
    const addToCartBtn = within(productOne).getByRole('button', {
      name: /add to cart/i,
    });
    await user.click(addToCartBtn);

    const incrementBtn = within(productOne).getByRole('button', {
      name: /increment quantity/i,
    });
    await user.click(incrementBtn);
    console.log('cart text = ' + cartLink.textContent);
    expect(cartLink.textContent).toMatch(/\(2\)$/i);

    const decreaseQtyBtn = within(productOne).getByRole('button', {
      name: /decrement quantity/i,
    });

    await user.click(decreaseQtyBtn);
    console.log('cart text = ' + cartLink.textContent);
    expect(cartLink.textContent).toMatch(/\(1\)$/i);
  });
});
