import {
  generateHexValue,
  generateInvalidHex,
  generateInvalidHexLength,
  generateValidHex,
} from "@/__tests__/testUtils/generators";
import { VALID_HEX_LENGHT_CASES } from "@/constants/hex.constants";
import { isValidHexColor } from "@/validators";
import { describe, expect, it } from "vitest";

describe(generateInvalidHexLength.name, () => {
  it("should exist", () => {
    const type = typeof generateInvalidHexLength;
    expect(type).toBe("function");
  });

  it("Should return a invalid hex length (X100)", () => {
    for (let i = 0; i < 100; i++) {
      const length = generateInvalidHexLength();

      expect(VALID_HEX_LENGHT_CASES).not.includes(length);
    }
  });

  it("All values should be inferior to 21 (X100)", () => {
    for (let i = 0; i < 100; i++) {
      const length = generateInvalidHexLength();
      expect(length).toBeLessThan(21);
    }
  });

  it("All values should be superior to 0 (X100)", () => {
    for (let i = 0; i < 100; i++) {
      const length = generateInvalidHexLength();
      expect(length).toBeGreaterThan(0);
    }
  });
});

describe(generateValidHex.name, () => {
  it("should exist", () => {
    const type = typeof generateValidHex;
    expect(type).toBe("function");
  });

  it("Should values start with # (X20)", () => {
    for (let i = 0; i < 20; i++) {
      const value = generateValidHex();
      expect(value.startsWith("#")).toBe(true);
    }
  });

  it("Should values has the correct length (X20)", () => {
    for (let i = 0; i < 20; i++) {
      const targetIndex = Math.floor(
        Math.random() * VALID_HEX_LENGHT_CASES.length
      );
      const targetLength = VALID_HEX_LENGHT_CASES[targetIndex];
      const value = generateValidHex(targetLength);
      expect(value.length).toBe(targetLength + 1);
    }
  });

  it("If no length is provided, the value should have 6 characters (X20)", () => {
    for (let i = 0; i < 20; i++) {
      const value = generateValidHex();
      expect(value.length).toBe(7);
    }
  });

  it("The return value is valid hex value (X100)", () => {
    for (let i = 0; i < 100; i++) {
      const value = generateValidHex();
      const isValiusHex = isValidHexColor(value);
      expect(isValiusHex).toBe(true);
    }
  });
});

describe(generateInvalidHex.name, () => {
  it("should exist", () => {
    const type = typeof generateInvalidHex;
    expect(type).toBe("function");
  });

  it("Should values start with # (X20)", () => {
    for (let i = 0; i < 20; i++) {
      const value = generateInvalidHex(6);
      expect(value.startsWith("#")).toBe(true);
    }
  });

  it("If withOctothorpe is false, should not start with # (X20)", () => {
    for (let i = 0; i < 20; i++) {
      const value = generateInvalidHex(6, false);
      expect(value.startsWith("#")).toBe(false);
    }
  });

  it("Should have the correct length (X100)", () => {
    for (let i = 0; i < 100; i++) {
      const length = Math.floor(Math.random() * 200);
      const value = generateInvalidHex(length);
      expect(value.length).toBe(length + 1);
    }
  });

  it("Should have the correct length withouth # (X100)", () => {
    for (let i = 0; i < 100; i++) {
      const length = Math.floor(Math.random() * 200);
      const value = generateInvalidHex(length, false);
      expect(value.length).toBe(length);
    }
  });

  it("All values should have invalid characters (X100)", () => {
    for (let i = 0; i < 100; i++) {
      const length = Math.floor(Math.random() * 200);
      const value = generateInvalidHex(length);
      const isValiusHex = isValidHexColor(value);
      expect(isValiusHex).toBe(false);
    }
  });

  describe(generateHexValue.name, () => {
    it("should exist", () => {
      const type = typeof generateHexValue;
      expect(type).toBe("function");
    });

    it("Should return a valid hex value (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const value = generateHexValue(true);
        const isValiusHex = isValidHexColor(value);
        expect(isValiusHex).toBe(true);
      }
    });

    it("Should return a invalid hex value (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const value = generateHexValue(false);
        const isValiusHex = isValidHexColor(value);
        expect(isValiusHex).toBe(false);
      }
    });

    it("If select valid, should ignores false length (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const value = generateHexValue(true, false);
        const isValiusHex = isValidHexColor(value);
        expect(isValiusHex).toBe(true);
      }
    });

    it("If select not valid, with false length, should return values with invalid lenght (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const value = generateHexValue(false, false);
        expect(VALID_HEX_LENGHT_CASES).not.includes(value.length - 1);
      }
    });

    it("If length is not provided, should return a value with 6 characters (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const value = generateHexValue(true);
        expect(value.length).toBe(7);
      }
    });

    it("If length is provided, should return a value with the correct length (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const targetIndex = Math.floor(
          Math.random() * VALID_HEX_LENGHT_CASES.length
        );
        const targetLength = VALID_HEX_LENGHT_CASES[targetIndex];
        const value = generateHexValue(true, targetLength);
        expect(value.length).toBe(targetLength + 1);
      }
    });

    it("If is valid ignores the withOctothorpe value (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const value = generateHexValue(true, 6, false);
        expect(value.startsWith("#")).toBe(true);
      }
    });

    it("If withOctothorpe is false, should not start with # (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const value = generateHexValue(false, false, false);
        expect(value.startsWith("#")).toBe(false);
      }
    });
  });
});
