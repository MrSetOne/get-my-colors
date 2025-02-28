import { generateHexValue } from "@/__tests__/testUtils/generators";
import { VALID_HEX_LENGHT_CASES } from "@/constants/hex.constants";
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
      const targetLengthIndex = Math.floor(
        Math.random() * VALID_HEX_LENGHT_CASES.length
      );
      const targetLength = VALID_HEX_LENGHT_CASES[targetLengthIndex];
      const color = generateHexValue(false, targetLength);
      const result = isValidHexColor(color);
      expect(result).toBe(false);
    }
  });
});
