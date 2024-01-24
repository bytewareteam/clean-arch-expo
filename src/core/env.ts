import * as process from 'process';

export const Env = {
  API_URL: process.env.API_URL as string,
} as const;
