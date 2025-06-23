import { AppEnvs } from ".";

export type AppEnv = typeof AppEnvs[keyof typeof AppEnvs];
