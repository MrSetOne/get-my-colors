import {
  generateHexLength,
  generateHexValue,
} from "@/__tests__/testUtils/generators";
import { isValidHexColor } from "@/validators";
import { describe, it, expect } from "vitest";

describe("isValidHexColor", () => {
  it("should exist", () => {
    const type = typeof isValidHexColor;
    expect(type).toBe("function");
  });

  it("Sould return false if the color not starts with #", () => {
    const color = generateHexValue(false, false, false);
    const result = isValidHexColor(color);
    expect(result).toBe(false);
  });

  it("Should return false if the color has incorrect length (x1000)", () => {
    for (let i = 0; i < 1000; i++) {
      const color = generateHexValue(false, false);
      const result = isValidHexColor(color);
      expect(result).toBe(false);
    }
  });

  it("Should return false if the color has incorrect values (x1000)", () => {
    for (let i = 0; i < 1000; i++) {
      const length = generateHexLength(true);
      const color = generateHexValue(false, length);
      const result = isValidHexColor(color);
      expect(result).toBe(false);
    }
  });

  it("Should return true if the color has correct values (x1000)", () => {
    for (let i = 0; i < 1000; i++) {
      const length = generateHexLength(true);
      const color = generateHexValue(true, length);
      const result = isValidHexColor(color);
      expect(result).toBe(true);
    }
  });
});
