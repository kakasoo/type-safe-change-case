import { StringType } from '@kakasoo/proto-typescript';
import { Split } from 'imweb-ad-types/channel/src/util/types/string.type';
import { IsStringLiteral } from './common';
import { StringArrayToPascalCase } from './pascal';
import { IsSnakeCase } from './snake';

export type SnakeToCamel<SnakeCase extends string> = Uncapitalize<
    StringArrayToPascalCase<StringType.Split<SnakeCase, '_'>>
>;

export type CamelCase<T extends string> =
    IsStringLiteral<T> extends true
        ? IsSnakeCase<T> extends true
            ? SnakeToCamel<T>
            : T extends ''
              ? ''
              : Uncapitalize<StringArrayToPascalCase<Split<T, ' '>>>
        : string;
