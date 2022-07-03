import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
async function load(relativePath) {
  const source = await readFile(new URL(relativePath, import.meta.url), 'utf8');
  return import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
}
const {Food} = await load('../js/Food.js');
const {ShoppingCart} = await load('../js/shoppingCart.js');
test('removing a missing product never removes the last one', () => {
  const food = new Food('Tea', 1, 0.1, '');
  const cart = new ShoppingCart([food]);
  assert.equal(cart.removeProduct(new Food('Other', 1, 1, '')), false);
  assert.equal(cart.deleteByIndex(-1), false);
  assert.equal(cart.totalElementos(), 1);
});
test('rejects fractional quantities and preserves decimal totals', () => {
  const food = new Food('Tea', 3, 0.1, '');
  assert.throws(() => food.setAmount(1.5));
  assert.equal(food.getAmount(), 3);
  assert.equal(new ShoppingCart([food]).priceTotal(), 0.3);
});

test('rejects empty prices and unsafe line amounts', () => {
  for (const price of [null, '', '  ', true, Infinity]) {
    assert.throws(() => new Food('Invalid', 1, price, ''));
  }
  const huge = new Food('Huge', Number.MAX_SAFE_INTEGER, 1, '');
  assert.throws(() => huge.calculatePrice());
});
