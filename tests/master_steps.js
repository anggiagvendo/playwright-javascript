import { page, expect } from '@playwright/test';
import * as master from './master_variables.js';

export async function openPage(page) {
    await page.goto(`${master.base_url}`)
    await expect(page).toHaveTitle("Automation Exercise")
}
