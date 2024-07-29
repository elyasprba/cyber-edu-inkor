import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
// src/setupTests.ts
import '@testing-library/jest-dom';


expect.extend(matchers);
