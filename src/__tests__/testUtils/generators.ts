import { ALL_CHARTS, VALID_HEX_LENGHT_CASES } from "@/constants/hex.constants";
import { HexLength } from "@/types/colors.types";
import { isValidHexColor } from "@/validators";

export const generateInvalidHexLength = (): number => {
  const length = Math.floor(Math.random() * 20) + 1;

  if ((VALID_HEX_LENGHT_CASES as number[]).includes(length)) {
    return generateInvalidHexLength();
  }

  return length;
};

export const generateValidHex = (length: HexLength = 6): string => {
  return `#${Math.floor(Math.random() * 16 ** length)
    .toString(16)
    .padStart(length, "0")}`;
};

export const generateInvalidHex = (
  length: number,
  withOctothorpe: boolean = true
): string => {
  const hexCode = Array.from(
    { length },
    () => ALL_CHARTS[Math.floor(Math.random() * ALL_CHARTS.length)]
  ).join("");

  const hexValue = `${withOctothorpe ? "#" : ""}${hexCode}`;

  if (isValidHexColor(hexValue)) {
    return generateInvalidHex(length, withOctothorpe);
  }

  return `${hexValue}`;
};

export const generateHexValue = (
  valid: boolean,
  length: HexLength | false = 6,
  withOctothorpe: boolean = true
) => {
  if (valid) {
    const targetLength = length ? length : 6;
    return generateValidHex(targetLength);
  } else {
    const targetLength = length ? length : generateInvalidHexLength();
    return generateInvalidHex(targetLength, withOctothorpe);
  }
};
