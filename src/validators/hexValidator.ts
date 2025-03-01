import { REGEX_HEX_VALUE } from '@/constants/regexs.constants';

export const isValidHexColor = (color: string): boolean => {
  return REGEX_HEX_VALUE.test(color);
};
