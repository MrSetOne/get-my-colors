import { isValidHexColor } from "@/validators";
import { describe, it, expect } from "vitest";

describe("isValidHexColor", () => {
  it("should exist", () => {
    const type = typeof isValidHexColor;
    expect(type).toBe("function");
  });
});
