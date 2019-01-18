import { IEnv } from "./env.interface";

export const environment: IEnv = require(`./env.${WEBPACK_ENV.MODE}`).environment;
