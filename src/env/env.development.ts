import { IEnv } from "./env.interface";

export const environment: IEnv = {
  isProd: false,
  backendEndpoint: 'https://dev.example/api',
};

console.log('🌚 is development');