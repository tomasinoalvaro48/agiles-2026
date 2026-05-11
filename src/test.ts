import { expect, test } from '@jest/globals'
import SumaDeStrings from './SumaDeStrings'

test('Suma de strings: "" debe ser 0', () => {
    const suma = new SumaDeStrings()
    expect(suma.Sumar("")).toBe(0)
})

