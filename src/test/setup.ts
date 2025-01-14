import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { mockedServer } from "./mock/server";

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  mockedServer.listen();
});
afterAll(() => {
  mockedServer.close();
});

afterEach(() => {
  mockedServer.resetHandlers();
});