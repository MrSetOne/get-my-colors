import { VALID_HEX_LENGHT_CASES } from '@/constants/hex.constants';
import { HexLength } from '@/types/colors.types';

export const isAValidHexLength = (length: number): length is HexLength => {
  return length in VALID_HEX_LENGHT_CASES;
};
