const { test, expect } = require('@playwright/test')

test('front page can be opened', async ({ page }) => {
  await page.goto('http://localhost:3001')
  await expect(page.getByText('ivysaur')).toBeVisible()
  await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
})

test('can navigate to ivysaur page', async ({ page }) => {
  await page.goto('http://localhost:3001')
  await page.getByText('ivysaur').click()
  await expect(page.getByText('chlorophyll')).toBeVisible()
})
