import { atom } from "jotai";

export type RateLimiterType = "bucket" | "token" | "sliding-window";

export const doInfiniteQueryAtom = atom(false);

export const rateLimiterTypeAtom = atom<RateLimiterType>("bucket");

export const bucketStateAtom = atom([]);

export const tokenStateAtom = atom([]);

export const slidingWindowStateAtom = atom([]);
