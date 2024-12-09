## Notes

- Tests rely on the Playwright framework.
- Update the `.env` file to configure URLs or credentials as needed.

# E2E API and UI test s

This project uses [Playwright](https://playwright.dev/) with TypeScript for end-to-end (E2E) testing.

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
