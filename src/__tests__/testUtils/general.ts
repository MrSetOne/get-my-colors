export const generateEntryPoint = (fn: Function) => {
  return `[Entry point] ${fn.name}`;
};
