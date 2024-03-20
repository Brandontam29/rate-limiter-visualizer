import { test, expect } from '@playwright/test';

test('Test Home Page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = page.locator('title');
  await expect(title).toHaveText('Rate Limiter Visualizer');
});