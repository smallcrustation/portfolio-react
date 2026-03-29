const prefix = "[portfolio]";

export const logger = {
  debug: (...args: unknown[]) => {
    if (import.meta.env.DEV) {
      console.debug(prefix, ...args);
    }
  },
  info: (...args: unknown[]) => {
    console.info(prefix, ...args);
  },
  warn: (...args: unknown[]) => {
    console.warn(prefix, ...args);
  },
  error: (...args: unknown[]) => {
    console.error(prefix, ...args);
  },
};
