const conversorDeTemperatura = require('./index.js');

/* global describe, test, expect */
describe('suite de testes para frontend', () => {
  test('faz a conversao de temperatura', () => {
    expect(conversorDeTemperatura(0)).toBe(32);
  });
});
