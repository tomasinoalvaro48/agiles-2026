# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\iniciar-partida.feature.spec.js >> Iniciar partida >> El jugador inicia una partida y ve la palabra oculta
- Location: .features-gen\features\iniciar-partida.feature.spec.js:6:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByTestId('word')
Expected: "_ _ _ _"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByTestId('word')

```

# Test source

```ts
  1  | import { expect } from '@playwright/test'
  2  | import { createBdd } from 'playwright-bdd'
  3  | 
  4  | const { Given, Then } = createBdd()
  5  | 
  6  | Given('una partida con la palabra {string}', async ({ page }, palabra: string) => {
  7  |   await page.goto(`/?word=${palabra}`)
  8  | })
  9  | 
  10 | Then('se ve la palabra {string}', async ({ page }, esperada: string) => {
> 11 |   await expect(page.getByTestId('word')).toHaveText(esperada)
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  12 | })
  13 | 
  14 | Then('se ven {int} vidas', async ({ page }, vidas: number) => {
  15 |   await expect(page.getByTestId('lives')).toHaveText(String(vidas))
  16 | })
  17 | 
```