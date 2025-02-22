import {
  generateInvalidHexValues,
  generateValidHexValues,
  getRandomHexCharacter,
} from "@/__tests__/testUtils/generators";
import { VALID_HEX_LENGHT_CASES } from "@/constants/hex.constants";
import {
  REGEX_HEX_CHARACTER,
  REGEX_HEX_VALUE,
} from "@/constants/regexs.constants";
import { describe, expect, it } from "vitest";

describe(generateInvalidHexValues.name, () => {
  it("should exist", () => {
    const type = typeof generateInvalidHexValues;
    expect(type).toBe("function");
  });

  it("Return the correct amount of values", () => {
    const values = generateInvalidHexValues(50);
    expect(values.length).toBe(50);
  });

  it("All values should start with #", () => {
    const values = generateInvalidHexValues(50);
    values.forEach((value) => {
      expect(value.startsWith("#")).toBe(true);
    });
  });

  it("All values should have invalid length (x50)", () => {
    const values = generateInvalidHexValues(50);

    values.forEach((value) => {
      const length = value.length - 1;
      expect(VALID_HEX_LENGHT_CASES.includes(length)).toBe(false);
    });
  });
});

describe(getRandomHexCharacter.name, () => {
  it("should exist", () => {
    const type = typeof getRandomHexCharacter;
    expect(type).toBe("function");
  });

  it("Should return a valid hex character (X20)", () => {
    for (let i = 0; i < 20; i++) {
      const character = getRandomHexCharacter();
      expect(character.length).toBe(1);
      expect(character).toMatch(REGEX_HEX_CHARACTER);
    }
  });
});

describe(generateValidHexValues.name, () => {
  it("should exist", () => {
    const type = typeof generateValidHexValues;
    expect(type).toBe("function");
  });

  it("Return the correct amount of values", () => {
    const values = generateValidHexValues(50);
    expect(values.length).toBe(50);
  });

  it("The values should have a valid length (x50)", () => {
    const values = generateValidHexValues(50);

    values.forEach((value) => {
      const length = value.length - 1;
      expect(VALID_HEX_LENGHT_CASES.includes(length)).toBe(true);
    });
  });

  it("All values should start with #", () => {
    const values = generateValidHexValues(50);
    values.forEach((value) => {
      expect(value.startsWith("#")).toBe(true);
    });
  });

  it("All values should have valid characters (x50)", () => {
    const values = generateValidHexValues(50);

    values.forEach((value) => {
      expect(value).toMatch(REGEX_HEX_VALUE);
    });
  });
});
