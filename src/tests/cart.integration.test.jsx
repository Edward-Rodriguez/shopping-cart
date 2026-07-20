import { describe, it, expect, beforeEach } from 'vitest';
import { getByRole, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../tests/test-utils';
import { ensureTwoDecimalPlaces } from '../utils/pricing';

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
    expect(cartLink.textContent).toMatch(/\(2\)$/i);

    const decreaseQtyBtn = within(productOne).getByRole('button', {
      name: /decrement quantity/i,
    });

    await user.click(decreaseQtyBtn);
    expect(cartLink.textContent).toMatch(/\(1\)$/i);
  });

  it('removes item and decreases car qty count after clicking remove in the cart list, no matter the qty.', async () => {
    const productOne = productCards[0];
    const addToCartBtn = within(productOne).getByRole('button', {
      name: /add to cart/i,
    });
    await user.click(addToCartBtn);

    const incrementBtn = within(productOne).getByRole('button', {
      name: /increment quantity/i,
    });
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(cartLink);

    const cartList = screen.getByRole('list', {
      name: /cart list/i,
    });

    const removeAllItemsBtn = screen.getByRole('button', {
      name: /remove all items/i,
    });
    await user.click(removeAllItemsBtn);

    console.log('cart text = ' + cartLink.textContent);
    expect(cartLink.textContent).toMatch(/\(0\)$/i);
    expect(cartList.children.length).toEqual(0);
  });

  it('total price updates correctly after adding items', async () => {
    let sumTotal = 0;
    const products = [...productCards];
    // add 4 random products to cart and get sumTotal
    for (let index = 0; index < 4; index++) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const addToCartButton = within(products[randomIndex]).getByRole(
        'button',
        {
          name: /add to cart/i,
        },
      );
      await user.click(addToCartButton);

      //get price within product list, trim dollar sign and add to sumTotal
      const price = within(products[randomIndex]).getByText(
        /^\$.*/,
      ).textContent;
      sumTotal += Number(price.substring(1).trim());
      console.log('sumTotal = ' + sumTotal);
      products.splice(randomIndex, 1);
    }

    await user.click(cartLink);
    const cartTotal = screen
      .getByText(/total/)
      .nextElementSibling.textContent.substring(1)
      .trim();
    console.log('cartTotal = ' + cartTotal);

    expect(cartTotal).toEqual(ensureTwoDecimalPlaces(sumTotal));
  });
});
