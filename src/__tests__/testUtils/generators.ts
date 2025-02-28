import {
  ALL_CHARTS,
  HEX_CHARACTERS,
  VALID_HEX_LENGHT_CASES,
} from "@/constants/hex.constants";
import { HexLength } from "@/types/colors.types";
import { isAValidHexLength } from "@/utils/typeGuards";
import { isValidHexColor } from "@/validators";

export const getRandomHexCharacter = () => {
  return HEX_CHARACTERS[Math.floor(Math.random() * HEX_CHARACTERS.length)];
};

// TODO: >>> HACER UN FACTORY DE ESTO

// TODO: >>> Add a config interface, to allow the user to pass a custom valid hex, hex length, non-hex characters, etc.
export const generateInvalidHexValues = (length = 50): string[] => {
  const values = [];
  for (let i = 0; i < length; i++) {
    const len = Math.floor(Math.random() * 20) + 1;
    if (!isAValidHexLength(len)) {
      let value = "#";
      for (let j = 0; j < len; j++) {
        value += getRandomHexCharacter();
      }
      values.push(value);
    } else {
      i--;
    }
  }
  return values;
};

export const generateValidHexValues = (length = 50): string[] => {
  const values = [];
  for (let i = 0; i < length; i++) {
    const len =
      VALID_HEX_LENGHT_CASES[
        Math.floor(Math.random() * VALID_HEX_LENGHT_CASES.length)
      ];
    let value = "#";
    for (let j = 0; j < len; j++) {
      value += getRandomHexCharacter();
    }
    values.push(value);
  }
  return values;
};

export const generateHexValue = (valid: boolean, length: HexLength = 6) => {
  return valid ? generateValidHex(length) : generateInvalidHex(length);
};

export const generateValidHex = (length: HexLength = 6): string => {
  return `#${Math.floor(Math.random() * 16 ** length)
    .toString(16)
    .padStart(length, "0")}`;
};

export const generateInvalidHex = (length: HexLength = 6): string => {
  const hexCode = Array.from(
    { length },
    () => ALL_CHARTS[Math.floor(Math.random() * ALL_CHARTS.length)]
  ).join("");

  const hexValue = `#${hexCode}`;

  if (isValidHexColor(hexValue)) {
    return generateInvalidHex(length);
  }

  return `#${hexValue}`;
};
