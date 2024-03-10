import { StringType } from '@kakasoo/proto-typescript';
import { IsStringLiteral } from './common';
import { StringArrayToPascalCase } from './pascal';

export type CamelCase<T extends string> = T extends ''
    ? ''
    : IsStringLiteral<T> extends true
      ? Uncapitalize<
            StringType.Includes<T, '_' | ' ' | '.' | '-' | '/'> extends true
                ? StringArrayToPascalCase<StringType.SplitByManySplitter<[T], ['_', ' ', '.', '-', '/']>>
                : Uncapitalize<T>
        >
      : string;

export type IsCamelCase<T extends string> = CamelCase<T> extends T ? true : false;
