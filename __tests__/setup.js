import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Component clean up stage after each test
afterEach(() => {
  cleanup();
});