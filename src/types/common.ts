import { Equal } from '@kakasoo/proto-typescript';

export type IsStringLiteral<T extends string> = Equal<T, string> extends true ? false : true;
