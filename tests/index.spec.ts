import { expect, test } from '@playwright/test';

test.describe('Home/Index', () => {
  test('homepage has title and h1 with correct text', async ({ page }) => {
    await page.goto('/');
  
    await expect(page).toHaveTitle(/TLD Item Logger/);
  
    const anchor = page.locator('h1.text-center.mt-5.text-xl');
  
    await expect(anchor).toContainText('Please go to');
  });
});
