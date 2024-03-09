import { StringType } from '@kakasoo/proto-typescript';
import { Split } from 'imweb-ad-types/channel/src/util/types/string.type';
import { IsStringLiteral } from './common';
import { StringArrayToPascalCase } from './pascal';
import { IsSnakeCase } from './snake';

export type SnakeToCamel<SnakeCase extends string> = Uncapitalize<
    StringArrayToPascalCase<StringType.Split<SnakeCase, '_'>>
>;

export type CapitalToCamel<CapitalCase extends string> = Uncapitalize<StringArrayToPascalCase<Split<CapitalCase, ' '>>>;

export type CamelCase<T extends string> = T extends ''
    ? ''
    : IsStringLiteral<T> extends true
      ? IsSnakeCase<T> extends true
          ? SnakeToCamel<T>
          : StringType.Includes<T, ' '> extends true // capital case
            ? Uncapitalize<StringArrayToPascalCase<StringType.Split<T, ' '>>>
            : StringType.Includes<T, '.'> extends true // dot case
              ? Uncapitalize<StringArrayToPascalCase<StringType.Split<T, '.'>>>
              : Uncapitalize<T>
      : string;
