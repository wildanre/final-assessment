import { sum } from './index.js';
import test from 'node:test';
import assert from 'node:assert';

test('Uji function sum dengan angka positif', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5, '2 + 3 harusnya hasilnya sama dengan 5');
});

test('Uji function sum dengan angka negatif', () => {
  const result = sum(-1, -1);
  assert.strictEqual(result, -2, '-1 + -1 harusnya hasilnya sama dengan -2');
});

test('Uji function sum dengan angka positif dan negatif', () => {
  const result = sum(2, -3);
  assert.strictEqual(result, -1, '2 + -3 harusnya hasilnya sama dengan -1');
});

test('Uji function sum dengan nol', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0, '0 + 0 harusnya hasilnya sama dengan 0');
});
