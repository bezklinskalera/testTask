import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://dev.app.realo.tech/shelfer/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('input[formcontrolname="username"]', email);
    await this.page.fill('input[formcontrolname="password"]', password);
    await this.page.click('button.mat-raised-button');
  }
}


