import { Split } from 'imweb-ad-types/channel/src/util/types/string.type';
import { IsStringLiteral } from './common';
import { StringArrayToPascalCase } from './pascal';
import { IsSnakeCase } from './snake';

export type SnakeToCamel<SnakeCase extends string> = Uncapitalize<StringArrayToPascalCase<Split<SnakeCase, '_'>>>;

export type CamelCase<T extends string> =
    IsStringLiteral<T> extends true ? (IsSnakeCase<T> extends true ? SnakeToCamel<T> : Uncapitalize<T>) : string;
