import { StringType } from '@kakasoo/proto-typescript';
import { IsStringLiteral } from './common';
import { StringArrayToPascalCase } from './pascal';
import { AllIsCapitalCases } from './capital';

type __Camelize<T extends string> = Uncapitalize<
    StringType.Includes<T, '_' | ' ' | '.' | '-' | '/'> extends true
        ? StringArrayToPascalCase<StringType.SplitByManySplitter<[T], ['_', ' ', '.', '-', '/']>>
        : Uncapitalize<T>
>;

export type CamelCase<T extends string> = T extends ''
    ? ''
    : IsStringLiteral<T> extends true
      ? AllIsCapitalCases<StringType.Split<T, ' '>> extends true
          ? Uncapitalize<StringType.ReplaceAll<T, ' ', ''>>
          : T extends Uppercase<T>
            ? __Camelize<Lowercase<T>>
            : __Camelize<T>
      : string;

export type IsCamelCase<T extends string> = CamelCase<T> extends T ? true : false;
