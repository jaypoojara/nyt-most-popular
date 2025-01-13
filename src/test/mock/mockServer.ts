import { setupServer } from "msw/node";
import { Handlers } from "./handlers";

export const mockedServer = setupServer(...Handlers);
