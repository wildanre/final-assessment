import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum harus mengembalikan angka positif', () => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 harusnya 5');
});
test('sum: harus mengembalikan 0 jika salah satu argumen bukan angka', () => {
  assert.strictEqual(sum(2, 'a'), 0);
  assert.strictEqual(sum('b', 3), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum(undefined, 3), 0);
});
test('sum: harus mengembalikan 0 jika salah satu argumen negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -2), 0);
});
test('sum: harus mengembalikan jumlah jika kedua argumen adalah angka positif', () => {
  assert.strictEqual(sum(10, 20), 30);
  assert.strictEqual(sum(0, 0), 0);
});
test('sum: harus mengembalikan 0 jika kedua argumen tidak valid', () => {
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, null), 0);
  assert.strictEqual(sum(undefined, undefined), 0);
});