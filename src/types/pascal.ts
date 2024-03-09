import { ArrayType } from '@kakasoo/proto-typescript';

export type StringArrayToPascalCase<T extends string[]> = ArrayType.Join<{ [K in keyof T]: Capitalize<T[K]> }, ''>;

export type CamelToPascal<T extends string> = T extends `${infer first}${infer Rest}` ? 1 : 2;
