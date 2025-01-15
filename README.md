# New york time Most Popular Api Integration
- yarn install to install node modules

---
## Table of Contents

- [New york time Most Popular Api Integration](#new-york-time-most-popular-api-integration)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Node Version](#node-version)
  - [Scripts](#scripts)
  - [Pre setup steps](#pre-setup-steps)
  - [Step to run unit test cases](#step-to-run-unit-test-cases)
    - [Unit Test Cases](#unit-test-cases)
    - [Unit Test Coverage Report](#unit-test-coverage-report)
  - [Step to run End to End test cases](#step-to-run-end-to-end-test-cases)
  - [Libraries Used and Their Purpose](#libraries-used-and-their-purpose)
  - [Useful Resources](#useful-resources)

---

## Tech Stack

| Topic                       | Technology                         |
| :-------------------------- | :--------------------------------- |
| **Frontend**                | React, Tailwind CSS, TypeScript    |
| **Testing**                 | Vitest, Playwright                 |
| **State Management**        | React                              |
| **Server State Management** | React Query by tanstack            |
| **Styling**                 | Tailwind CSS, clsx, tailwind-merge |
| **Api Mocking**             | MSW                                |
| **Node Package Manager**    | Yarn                               |

---

## Node Version

This project requires Node.js version **`v23.6.0`**. You can verify your version using the following command:

```bash
node --version #v23.6.0
```
---

## Scripts

These are the available scripts in the project:

- `yarn dev`: Starts the development server using Vite.
- `yarn build`: Builds the project (compiles TypeScript and uses Vite for bundling).
- `yarn lint`: Runs ESLint for linting code.
- `yarn preview`: Starts a production preview of the build.
- `yarn test`: Runs unit tests using Vitest.
- `yarn test:coverage`: Runs unit tests and generates a coverage report.
- `yarn test:watch`: Runs tests in watch mode (useful for active development).
- `yarn test:e2e`: Runs end-to-end tests using Playwright.
- `yarn test:e2e:ci`: Runs Playwright tests for CI environments.

---

## Pre setup steps

```bash
node -v # Output: v23.6.0
git clone <...url>
cp .env.example .env.local
# add api key inside .env.local file
# enable or disable mock api behavior through `VITE_MOCK_API`
yarn install

```

## Step to run unit test cases
### Unit Test Cases
```bash
npm run test
```
### Unit Test Coverage Report
```bash
npm run test:coverage
```
---

## Step to run End to End test cases
1. Start Local development server
   1. Enable `VITE_MOCK_API=true` inside `.env.local` file
```bash
npm run dev
```
2. Start end to end test case with UI mode

```bash
npm run test:e2e
```
---

## Libraries Used and Their Purpose

- **axios**: For making HTTP requests.
- **react-toastify**: For showing toast notifications (success, error, info, etc.).
- **clsx**: A utility for conditionally combining class names.
- **tailwind-merge**: A utility for merging conflicting Tailwind CSS classes.
- **msw**: For mocking network requests during testing to simulate different responses.
- **vitest**: For running unit tests and measuring code coverage.
- **playwright**: For writing and running end-to-end tests with browser automation.

---

## Useful Resources
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Query Documentation](https://tanstack.com/query/v3)
- [MSW Documentation](https://mswjs.io/)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [How to setup vitest with typescript](https://akoskm.com/how-to-test-react-apps-with-vitest-and-vite/)
- [How to setup vitest, msw and playwright](https://dev.to/juan_deto/configure-vitest-msw-and-playwright-in-a-react-project-with-vite-and-ts-1d92)
