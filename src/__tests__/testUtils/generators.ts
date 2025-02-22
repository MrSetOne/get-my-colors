import {
  HEX_CHARACTERS,
  VALID_HEX_LENGHT_CASES,
} from "@/constants/hex.constants";

export const getRandomHexCharacter = () => {
  return HEX_CHARACTERS[Math.floor(Math.random() * HEX_CHARACTERS.length)];
};

// TODO: >>> Add a config interface, to allow the user to pass a custom valid hex, hex length, non-hex characters, etc.
export const generateInvalidHexValues = (length = 50): string[] => {
  const values = [];
  for (let i = 0; i < length; i++) {
    const len = Math.floor(Math.random() * 20) + 1;
    if (!VALID_HEX_LENGHT_CASES.includes(len)) {
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
