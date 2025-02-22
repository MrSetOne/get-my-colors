import { getMyColors } from "../index";
import { describe, it, expect } from "vitest";

describe("get-my-colors", () => {
  it("should return the correct color code for red", () => {
    const result = getMyColors();
    expect(result).toStrictEqual(["red", "green", "blue"]);
  });
});
