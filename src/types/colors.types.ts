export const validHexLength = {
  3: 3,
  4: 4,
  6: 6,
  8: 8,
} as const;

export type HexLength = keyof typeof validHexLength;
