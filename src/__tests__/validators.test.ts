import { generateInvalidHexValues } from "@/__tests__/testUtils/generators";
import { isValidHexColor } from "@/validators";
import { describe, it, expect } from "vitest";

describe("isValidHexColor", () => {
  it("should exist", () => {
    const type = typeof isValidHexColor;
    expect(type).toBe("function");
  });

  it("Returns false if does not start with #", () => {
    const result = isValidHexColor("FF00FF");
    expect(result).toBe(false);
  });

  it("Returns false if has invalid characters", () => {
    const result = isValidHexColor("#FF00FG");
    expect(result).toBe(false);
  });

  it("Returns false if has invalid length", () => {
    const invalidLengthValues = generateInvalidHexValues();
    invalidLengthValues.forEach((value) => {
      const result = isValidHexColor(value);
      expect(result).toBe(false);
    });
  });
});
