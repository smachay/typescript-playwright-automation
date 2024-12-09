# API and UI playwright test

This project uses [Playwright](https://playwright.dev/) with TypeScript for end-to-end UI and API testing.

## 🚀 Getting Started

To get started with this project, ensure you have **Node.js (>= 16.x)** and **npm** installed on your system.

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/smachay/typescript-playwright-automation.git
   cd typescript-playwright-automation

   ```

2. **Environment Variables**

In the env folder create .env file and add the following environment variables:

```env
BASE_FRONTEND_URL='https://www.saucedemo.com/'
BASE_BACKEND_URL='https://fakerestapi.azurewebsites.net/'
USER_NAME='standard_user'
USER_PASSWORD='secret_sauce'
```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

### Structure:
- **`sections`**: 
  - Contains reusable components of pages, such as header and navigation bars.
  - Implements the **Page Object Model (POM)** for modularity and reusability.
  - Example: `PageHeader`, `NavigationBar`.

- **`pages`**: 
  - Represents individual pages of the application, such as `LoginPage`, `InventoryPage`, `CartPage`, and more.
  - Each class in this folder corresponds to a single page and contains locators and methods to interact with that page.

- **`PageObjects`**: 
  - Contains base classes representing the more complex website elements.
  - Includes foundational classes like `PageObjects`, `BaseItemList`, or `BaseItem` to enforce consistent design patterns across the tests.

- **`config`**:
  - Includes configuration files and shared constants.
  - Stores URLs, environment variables, and other settings required for frontend tests.


## Backend Directory Structure

The **backend** directory contains code for testing backend APIs and utilities for HTTP requests.

### Structure:
- **`utils/api`**: 
  - Contains abstractions and utility functions for interacting with APIs.
  - Includes reusable classes or methods for sending HTTP requests (e.g., GET, POST) and handling responses.
  - Example: `ApiClient`.

- **`config`**: 
  - Stores configuration files for backend testing, such as the base URL and.
  - Helps manage environment-specific configurations.

## ▶️ Running Tests

To run all the tests, use:

### Run Frontend E2E Tests in Headless Mode

```bash
npm run e2e:fe:headless:test
```

### Run Frontend E2E Tests with UI

```bash
npm run e2e:fe:ui:test
```

### Run Backend E2E Tests

```bash
npm run e2e:be:test
```

### View the test report

```bash
npm run e2e:report
```

## ⚙️ Configuration

Make sure that you set Prettier as your formatter. To do that go to File -> Preferences -> Settings and search form "formatter"

The Playwright configuration file (`playwright.config.ts`) allows you to customize various options like test directory, browsers, timeouts, and more.

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)
