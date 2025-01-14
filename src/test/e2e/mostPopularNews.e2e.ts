import {
  test,
  expect,
  Page
} from '@playwright/test';

test.describe('Most Popular News Listing', () => {
  const PAGE_URL = 'http://localhost:5174/nyt-most-popular-news';

  const waitForLoaderToHide = async (page: Page) => {
    await page.waitForSelector('[data-testid="loading"]', { state: 'hidden', timeout: 10000 });
    const loadingElement = await page.getByTestId('loading');
    await expect(loadingElement).not.toBeVisible();
  }

  const waitForListToLoad = async (page: Page) => {
    await page.waitForSelector('[data-testid="wrapper-list"]', { state: 'visible', timeout: 10000 });
    const listContainer = await page.getByTestId('wrapper-list');
    await expect(listContainer).toBeVisible();
    return listContainer;
  }

  test('displays news cards when data is loaded', async ({ page }) => {
    await page.goto(PAGE_URL);

    await waitForLoaderToHide(page);

    // Wait for list container and ensure it's visible
    const listContainer = await waitForListToLoad(page);

    // Wait for the first card
    const firstCard = await listContainer.locator('a').first();
    await expect(firstCard).toBeVisible({ timeout: 5000 });

    // Check card structure and content
    await expect(firstCard.locator('img')).toBeVisible();
    await expect(firstCard.locator('.font-bold.text-xl')).toBeVisible();
    await expect(firstCard.locator('.text-gray-700.text-base')).toBeVisible();
    await expect(firstCard.locator('.text-sm.text-gray-500')).toBeVisible();
  });

  test('verifies card component structure and styling', async ({ page }) => {
    await page.goto(PAGE_URL);

    await waitForLoaderToHide(page);

    const listContainer = await waitForListToLoad(page);

    // Wait for the first card
    const firstCard = await listContainer.locator('a').first();
    await expect(firstCard).toBeVisible();

    // Check image properties
    const image = await firstCard.locator('img');
    await expect(image).toBeVisible();
    await expect(image).toHaveClass('w-full');
    await expect(image).toHaveAttribute('alt');
    await expect(image).toHaveAttribute('src');

    // Check content container
    const contentContainer = await firstCard.locator('.px-6.py-4');
    await expect(contentContainer).toBeVisible();

    // Check title
    const title = await contentContainer.locator('.font-bold.text-xl');
    await expect(title).toBeVisible();
    await expect(title).toHaveClass('font-bold text-xl mb-2');

    // Check abstract
    const abstract = await contentContainer.locator('.text-gray-700.text-base');
    await expect(abstract).toBeVisible();
    await expect(abstract).toHaveClass('text-gray-700 text-base mb-4');

    // Check byline
    const byline = await contentContainer.locator('.text-sm.text-gray-500');
    await expect(byline).toBeVisible();
  });

  test('news cards have correct link attributes and layout', async ({ page }) => {
    await page.goto(PAGE_URL);

    await waitForLoaderToHide(page);

    const listContainer = await waitForListToLoad(page);

    const firstCardLink = await listContainer.locator('a').first();
    await expect(firstCardLink).toBeVisible();
    // Verify link attributes
    await expect(firstCardLink).toHaveAttribute('target', '_blank');
    await expect(firstCardLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Verify the card inside the link has correct layout
    const card = await firstCardLink.locator('div').first();
    await expect(card).toBeVisible();
    await expect(card).toHaveClass('max-w-sm rounded overflow-hidden border cursor-pointer h-full');
  });

  test('validates API response and card content match', async ({ page }) => {
    await page.goto(PAGE_URL);

    await waitForLoaderToHide(page);

    const listContainer = await waitForListToLoad(page);

    // Get the first card's content
    const firstCard = await listContainer.locator('a').first();
    const title = await firstCard.locator('.font-bold.text-xl').textContent();
    const abstract = await firstCard.locator('.text-gray-700.text-base').textContent();
    const byline = await firstCard.locator('.text-sm.text-gray-500').textContent();

    // Verify content is not empty
    expect(title).toBeTruthy();
    expect(abstract).toBeTruthy();
    expect(byline).toBeTruthy();
  });

  test('verifies image properties and dimensions', async ({ page }) => {
    await page.goto(PAGE_URL);

    await waitForLoaderToHide(page);

    // Wait for images to load
    await page.waitForLoadState('networkidle');

    const listContainer = await waitForListToLoad(page);

    // Get the first card's image
    const firstImage = await listContainer.locator('a').first().locator('img').first();
    await expect(firstImage).toBeVisible();

    // Verify image properties
    await expect(firstImage).toHaveClass('w-full');
    const src = await firstImage.getAttribute('src');
    expect(src).toBeTruthy();
    expect(src).toMatch(/^https:/);

    // Verify image dimensions
    const width = await firstImage.getAttribute('width');
    const height = await firstImage.getAttribute('height');
    if (width && height) {
      expect(parseInt(width)).toBeGreaterThan(0);
      expect(parseInt(height)).toBeGreaterThan(0);
    }
  });
});
