# Jaypoojara Test Task Of New york time Most Popular Api Integration

## Table of Contents

- [Jaypoojara Test Task Of New york time Most Popular Api Integration](#jaypoojara-test-task-of-new-york-time-most-popular-api-integration)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Scripts](#scripts)
  - [Libraries Used and Their Purpose](#libraries-used-and-their-purpose)
  - [Node Version](#node-version)
  - [Useful Resources](#useful-resources)

---

## Tech Stack

- **Frontend**: React, Tailwind CSS, TypeScript
- **Testing**: Vitest, Playwright
- **State Management**: React
- **Server State Management**: React Query by tanstack
- **Styling**: Tailwind CSS, clsx, tailwind-merge
- **Api Mocking**: MSW

---

## Scripts

These are the available scripts in the project:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Builds the project (compiles TypeScript and uses Vite for bundling).
- `npm run lint`: Runs ESLint for linting code.
- `npm run preview`: Starts a production preview of the build.
- `npm run test`: Runs unit tests using Vitest.
- `npm run test:coverage`: Runs unit tests and generates a coverage report.
- `npm run test:watch`: Runs tests in watch mode (useful for active development).
- `npm run test:e2e`: Runs end-to-end tests using Playwright.
- `npm run test:e2e:ci`: Runs Playwright tests for CI environments.

## Libraries Used and Their Purpose

- **axios**: For making HTTP requests.
- **react-toastify**: For showing toast notifications (success, error, info, etc.).
- **clsx**: A utility for conditionally combining class names.
- **tailwind-merge**: A utility for merging conflicting Tailwind CSS classes.
- **msw**: For mocking network requests during testing to simulate different responses.
- **vitest**: For running unit tests and measuring code coverage.
- **playwright**: For writing and running end-to-end tests with browser automation.



## Node Version

This project requires Node.js version **`v23.6.0`**. You can verify your version using the following command:

```bash
node --version
```

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