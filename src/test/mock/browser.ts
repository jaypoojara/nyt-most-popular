import { setupWorker } from "msw/browser";
import { Handlers } from "./handlers";

export const worker = setupWorker(...Handlers);
