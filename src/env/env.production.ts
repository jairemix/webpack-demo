import { IEnv } from "./env.interface";

export const environment: IEnv = {
  isProd: true,
  backendEndpoint: 'https://prod.example/api',
};

console.log('⭐️ is production');