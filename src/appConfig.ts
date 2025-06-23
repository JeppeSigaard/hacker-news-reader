import { assert } from 'console';
import dotenv from 'dotenv';
dotenv.config();

const { API_BASE_URL } = process.env;

[API_BASE_URL].forEach((v) => assert(v, `Missing env var: ${v}`));

type Config = {
  apiUrl: string;
  cacheTimeout: {
    stories: number;
    story: number;
    user: number;
  };
};

export const config: Config = {
  apiUrl: API_BASE_URL || '',
  cacheTimeout: {
    stories: 5000,
    story: 60000,
    user: 60000,
  },
};
