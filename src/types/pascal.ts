import { ArrayType } from '@kakasoo/proto-typescript';

type StringArrayToPacalStringArray<T extends string[]> = { [K in keyof T]: Capitalize<Lowercase<T[K]>> };
export type StringArrayToPascalCase<T extends string[]> = ArrayType.Join<StringArrayToPacalStringArray<T>, ''>;

export type CamelToPascal<T extends string> = T extends `${infer first}${infer Rest}` ? 1 : 2;
