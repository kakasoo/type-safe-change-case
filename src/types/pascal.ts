import { ArrayType } from '@kakasoo/proto-typescript';
import { IsCamelCase } from './camel';

type StringArrayToPacalStringArray<T extends string[]> = {
    [K in keyof T]: Capitalize<IsCamelCase<T[K]> extends true ? T[K] : Lowercase<T[K]>>;
};

export type StringArrayToPascalCase<T extends string[]> = ArrayType.Join<StringArrayToPacalStringArray<T>, ''>;

export type CamelToPascal<T extends string> = T extends `${infer first}${infer Rest}` ? 1 : 2;
