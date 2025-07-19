import { Page } from "@playwright/test";

export class StoreSections {
  constructor(private page: Page) {}

  async searchAndOpenSection(name: string) {
    await this.page.getByRole("textbox", { name: "Search section name" }).fill(name);
    await this.page.getByText(`${name}edit`, { exact: false }).click();
  }

  async addSectionWithFixtures(name: string, count: number) {
    await this.page.getByText("keyboard_arrow_down").click();
    await this.page.getByRole("button", { name: "Setup" }).click();
    await this.page.getByRole("button", { name: "Add Section" }).click();
    await this.page.getByRole("textbox", { name: "Type name" }).fill(name);
    for (let i = 0; i < count; i++) {
      await this.page.getByRole("button").filter({ hasText: /^add$/ }).click();
    }
    await this.page.getByTestId("dialog-content-button").click();
  }

  async searchProductInSection(sectionName: string, productName: string) {
    await this.searchAndOpenSection(sectionName);
    await this.page.getByTestId('catalog-list-search-field').fill(productName);
    await this.page.getByText(productName, { exact: true }).click();
  }
}
