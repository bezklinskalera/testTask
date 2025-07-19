// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import {getAuthData} from "../utils"

const authData = getAuthData();

test.beforeEach(async({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(authData.username, authData.password);

} )
test('log in to the system', async ({ page }) => {
  await expect(page).toHaveURL('https://dev.app.realo.tech/shelfer/store');
});
