import { atom } from "jotai";

type Object = {
  [key: string]: any;
};

export const requestsAtom = atom<Object[]>([]);

export const responsesAtom = atom<Object[]>([]);
