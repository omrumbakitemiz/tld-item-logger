import { expect, test } from '@playwright/test';

test.describe('Maps', () => {
  test('map should be visible', async ({ page }) => {
    await page.goto('/maps/1');
  
    const map = page.getByRole('img', { name: 'map-image' });
    
    await expect(map).toBeVisible();
  });
  
  test('map src should change when selecting a different map from the dropdown', async ({ page }) => {
    await page.goto('/maps/0');
  
    const map = page.getByRole('img', { name: 'map-image' });
    
    await expect(map).toBeVisible();

    const oldMapSrc = await map.getAttribute('src');
    
    await page.selectOption('select', '2');

    // wait for 1 second for the map to change
    // this is because the map is not reloaded, but rather page is reloading
    await page.waitForTimeout(1000);
    
    const newMap = page.getByRole('img', { name: 'map-image' });

    await expect(newMap).toBeVisible();

    const newMapSrc = await newMap.getAttribute('src');
    
    expect(oldMapSrc).not.toEqual(newMapSrc);
  });

  test.skip('when user drop an item to map, items should be appended correctly to map', async ({ page }) => {
    await page.goto('/maps/0');
  
    const map = page.getByRole('img', { name: 'map-image' });

    const items = page.getByRole('img', { name: 'item-image'});
    const item = items.first();

    await item.dragTo(map);

    // wait for 1 second for the item to be appended to map
    await page.waitForTimeout(1000);

    const itemOnMap = page.getByRole('img', { name: 'map-item-image'});

    await expect(itemOnMap).toBeVisible();
  });

  test('items in item list should be draggable', async ({ page }) => {
    await page.goto('/maps/0');

    await page.waitForTimeout(1000);

    const items = page.getByRole('img', { name: 'item-image'});

    // check for every item in the list if it is draggable or not without loop
    await expect(items.first()).toHaveAttribute('draggable', 'true');
    await expect(items.nth(1)).toHaveAttribute('draggable', 'true');
    await expect(items.nth(2)).toHaveAttribute('draggable', 'true');
  });
})
