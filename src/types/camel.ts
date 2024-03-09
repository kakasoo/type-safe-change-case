import { StringType } from '@kakasoo/proto-typescript';
import { Split } from 'imweb-ad-types/channel/src/util/types/string.type';
import { IsStringLiteral } from './common';
import { StringArrayToPascalCase } from './pascal';
import { IsSnakeCase } from './snake';

export type CapitalToCamel<CapitalCase extends string> = Uncapitalize<StringArrayToPascalCase<Split<CapitalCase, ' '>>>;

export type CamelCase<T extends string> = T extends ''
    ? ''
    : IsStringLiteral<T> extends true
      ? StringType.Includes<T, '_'> extends true // snake_case, Snake_Case
          ? Uncapitalize<StringArrayToPascalCase<StringType.Split<T, '_'>>>
          : StringType.Includes<T, ' '> extends true // CAPITAL_CASE, no case
            ? Uncapitalize<StringArrayToPascalCase<StringType.Split<T, ' '>>>
            : StringType.Includes<T, '.'> extends true // dot.case
              ? Uncapitalize<StringArrayToPascalCase<StringType.Split<T, '.'>>>
              : StringType.Includes<T, '-'> extends true // kebab-case
                ? Uncapitalize<StringArrayToPascalCase<StringType.Split<T, '-'>>>
                : StringType.Includes<T, '/'> extends true // path/case
                  ? Uncapitalize<StringArrayToPascalCase<StringType.Split<T, '/'>>>
                  : Uncapitalize<T> // PascalCase
      : string;
