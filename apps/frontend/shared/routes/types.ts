import { Routes } from './index';

export type Route = (typeof Routes)[keyof typeof Routes];