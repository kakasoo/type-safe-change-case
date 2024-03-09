import { ArrayType, StringType } from '@kakasoo/proto-typescript';
import { IsCamelCase } from './camel';
import { ToString } from 'imweb-ad-types/channel/src/util/types/string.type';

type StringArrayToPacalStringArray<T extends string[]> = {
    [K in keyof T]: Capitalize<IsCamelCase<T[K]> extends true ? T[K] : Lowercase<T[K]>>;
};

export type StringArrayToPascalCase<T extends string[]> = ArrayType.Join<StringArrayToPacalStringArray<T>, ''>;

export type CamelToPascal<T extends string> = T extends `${infer first}${infer Rest}` ? 1 : 2;

type IsPascalCase<T extends string> =
    StringType.IsUpperCase<ToString<StringType.At<T, 0>>> extends true
        ? IsCamelCase<Uncapitalize<T>> extends true
            ? true
            : false
        : false;
