// Import the expect and afterEach methods from the vitest package.
import { expect, afterEach } from "vitest";

// Import the cleanup method from @testing-library/react.
import { cleanup } from "@testing-library/react";

// Import the matchers default object from @testing-library/jest-dom/matchers.
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend the expect method to include the matcher methods from RTL.
// Invoke expect.extend() and pass matchers.
expect.extend(matchers)

// Invoke the afterEach method by passing an arrow function which calls cleanup().
afterEach(() => {
  cleanup();
})

//  Ant Design (antd) library is trying to use window.matchMedia, 
// which is not available in the test environment.
// We can mock it by adding the following code to the setupTests.js file:
window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};