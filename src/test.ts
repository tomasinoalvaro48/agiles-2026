import { expect, test } from '@jest/globals';
import SumaDeStrings from './SumaDeStrings';

test('Suma de strings: "" debe ser 0', () => {
  const suma = new SumaDeStrings();
  expect(suma.Sumar('')).toBe(0);
});

test("Suma de strings: '1,2' debe ser 3", () => {
  const suma = new SumaDeStrings();
  expect(suma.Sumar('1,2')).toBe(3);
});

test("Suma de strings: '4,2' debe ser 6", () => {
  const suma = new SumaDeStrings();
  expect(suma.Sumar('4,2')).toBe(6);
});

test("Suma de 1 string: '1' debe ser 1", () => {
  const suma = new SumaDeStrings();
  expect(suma.Sumar('1')).toBe(1);
});

test("Suma de string: '1,2,3' debe ser 6", () => {
  const suma = new SumaDeStrings();
  expect(suma.Sumar('1,2,3')).toBe(6);
});

