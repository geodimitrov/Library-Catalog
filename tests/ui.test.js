const { test, expect } = require('@playwright/test');

test('Verify', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
})