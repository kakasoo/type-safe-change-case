import { ArrayType } from '@kakasoo/proto-typescript';
import { IsCamelCase } from './camel';

export type OnlyFirstLetterIsUppercase<T extends string> =
    T extends `${infer First extends string}${infer Rest extends string}`
        ? First extends Uppercase<First>
            ? Rest extends Lowercase<Rest>
                ? true
                : false
            : false
        : false;

type StringArrayToPacalStringArray<T extends readonly string[]> = T extends []
    ? []
    : T extends [infer First extends string]
      ? [OnlyFirstLetterIsUppercase<First> extends true ? First : Capitalize<Lowercase<First>>]
      : T extends [infer First extends string, ...infer Rest extends string[]]
        ? [
              OnlyFirstLetterIsUppercase<First> extends true
                  ? First
                  : Capitalize<IsCamelCase<First> extends true ? First : Lowercase<First>>,
              ...StringArrayToPacalStringArray<Rest>,
          ]
        : [];

export type StringArrayToPascalCase<T extends string[]> = ArrayType.Join<StringArrayToPacalStringArray<T>, ''>;

export type CamelToPascal<T extends string> = T extends `${infer first}${infer Rest}` ? 1 : 2;
