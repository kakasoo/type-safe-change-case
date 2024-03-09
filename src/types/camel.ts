import { StringType } from '@kakasoo/proto-typescript';
import { IsStringLiteral } from './common';
import { StringArrayToPascalCase } from './pascal';

type __CamelCase<T extends string> = T extends ''
    ? ''
    : IsStringLiteral<T> extends true
      ? StringType.Includes<T, '_'> extends true // snake_case, Snake_Case
          ? StringArrayToPascalCase<StringType.Split<T, '_'>>
          : StringType.Includes<T, ' '> extends true // CAPITAL_CASE, no case, Sentence case
            ? StringArrayToPascalCase<StringType.Split<T, ' '>>
            : StringType.Includes<T, '.'> extends true // dot.case
              ? StringArrayToPascalCase<StringType.Split<T, '.'>>
              : StringType.Includes<T, '-'> extends true // kebab-case
                ? StringArrayToPascalCase<StringType.Split<T, '-'>>
                : StringType.Includes<T, '/'> extends true // path/case
                  ? StringArrayToPascalCase<StringType.Split<T, '/'>>
                  : Uncapitalize<T> // PascalCase
      : string;

export type IsCamelCase<T extends string> = CamelCase<T> extends T ? true : false;

export type CamelCase<T extends string> = Uncapitalize<
    StringType.Includes<__CamelCase<T>, '_' | ' ' | '.' | '-' | '/'> extends true
        ? __CamelCase<__CamelCase<T>>
        : __CamelCase<T>
>;
