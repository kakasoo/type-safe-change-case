import { StringType } from '@kakasoo/proto-typescript';
import { IsStringLiteral } from './common';
import { StringArrayToPascalCase } from './pascal';

type __Camelize<T extends string> = Uncapitalize<
    StringType.Includes<T, '_' | ' ' | '.' | '-' | '/'> extends true
        ? StringArrayToPascalCase<StringType.SplitByManySplitter<[T], ['_', ' ', '.', '-', '/']>>
        : Uncapitalize<T>
>;

export type CamelCase<T extends string> = T extends ''
    ? ''
    : IsStringLiteral<T> extends true
      ? T extends Uppercase<T>
          ? __Camelize<Lowercase<T>>
          : __Camelize<T>
      : string;

export type IsCamelCase<T extends string> = CamelCase<T> extends T ? true : false;
