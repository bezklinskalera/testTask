import { test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { StoreSections } from "./pages/StoreSections";
import {getAuthData} from "../utils"

let store: StoreSections;
const authData = getAuthData();

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(authData.username, authData.password);
  store = new StoreSections(page);
});

test('search section "Fruits"', async () => {
  await store.searchAndOpenSection("Fruits");
});

test('add "Meat" section with 3 fixtures', async () => {
  await store.addSectionWithFixtures("Meat", 3);
});

test('search product "Miao3" in "Fruits" section', async () => {
  await store.searchProductInSection("Fruits", "Miao3");
});
