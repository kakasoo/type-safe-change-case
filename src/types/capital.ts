import { StringType } from '@kakasoo/proto-typescript';
import { OnlyFirstLetterIsUppercase } from './pascal';

export type CapitalCaseToPascalCase<T extends string> = StringType.ReplaceAll<T, ' ', ''>;

export type IsCapitalCase<T extends string> = OnlyFirstLetterIsUppercase<T> extends true ? true : false;
export type AllIsCapitalCases<T extends string[]> = T extends []
    ? true
    : T extends [infer First extends string, ...infer Rest extends string[]]
      ? IsCapitalCase<First> extends true
          ? AllIsCapitalCases<Rest> extends true
              ? true
              : false
          : false
      : false;
