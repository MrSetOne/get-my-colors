import { generateEntryPoint } from "@/__tests__/testUtils/general";
import {
  generateHexLength,
  generateHexValue,
  generateInvalidHex,
  generateInvalidHexLength,
  generateValidHex,
  generateValidHexLength,
} from "@/__tests__/testUtils/generators";
import { VALID_HEX_LENGHT_CASES } from "@/constants/hex.constants";
import { isValidHexColor } from "@/validators";
import { describe, expect, it, suite } from "vitest";

suite("HEX Length Generators", () => {
  describe(generateEntryPoint(generateHexLength), () => {
    it("should exist", () => {
      const type = typeof generateHexLength;
      expect(type).toBe("function");
    });

    it("Should return a valid hex length (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const length = generateHexLength(true);
        expect(VALID_HEX_LENGHT_CASES).includes(length);
      }
    });

    it("Should return a invalid hex length (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const length = generateHexLength(false);
        expect(VALID_HEX_LENGHT_CASES).not.includes(length);
      }
    });
  });

  describe(generateValidHexLength.name, () => {
    it("should exist", () => {
      const type = typeof generateValidHexLength;
      expect(type).toBe("function");
    });

    it("Should return a valid hex length (X100)", () => {
      for (let i = 0; i < 100; i++) {
        const length = generateValidHexLength();
        expect(VALID_HEX_LENGHT_CASES).includes(length);
      }
    });
  });

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
});

suite("HEX Generators", () => {
  describe(generateEntryPoint(generateHexValue), () => {
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

    it("Invalid hex should have invalid length (X100)", () => {
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
        const length = generateHexLength(true);
        const value = generateHexValue(true, length);
        expect(value.length).toBe(length + 1);
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
        const length = generateHexLength(true);
        const value = generateValidHex(length);
        expect(value.length).toBe(length + 1);
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
  });
});
