import { StringType } from '@kakasoo/proto-typescript';
import { IsStringLiteral } from './common';

export type IsSnakeCase<T extends string> = StringType.Includes<T, '_'> extends true ? true : false;

type __PascalToSnake<T extends string, isFirstLetter extends boolean = true> = T extends `${infer A}${infer R}`
    ? Uppercase<A> extends A
        ? isFirstLetter extends true
            ? `${Lowercase<A>}${__PascalToSnake<R, false>}`
            : `_${Lowercase<A>}${__PascalToSnake<R, false>}`
        : `${A}${__PascalToSnake<R, false>}`
    : '';
export type PascalToSnake<T extends string> = IsStringLiteral<T> extends true ? __PascalToSnake<T, true> : string;
