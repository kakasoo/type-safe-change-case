import changeCase from 'change-case';
import { CamelCase } from './types/camel';

export function camelCase<T extends string>(input: T): CamelCase<T> {
    return changeCase.camelCase(input) as CamelCase<T>;
}

export function capitalCase<T extends string>(input: T) {
    return changeCase.capitalCase(input);
}

export function constantCase<T extends string>(input: T) {
    return changeCase.constantCase(input);
}

export function dotCase<T extends string>(input: T) {
    return changeCase.dotCase(input);
}

export function kebabCase<T extends string>(input: T) {
    return changeCase.kebabCase(input);
}

export function noCase<T extends string>(input: T) {
    return changeCase.noCase(input);
}

export function pascalCase<T extends string>(input: T) {
    return changeCase.pascalCase(input);
}

export function pascalSnakeCase<T extends string>(input: T) {
    return changeCase.pascalSnakeCase(input);
}

export function pathCase<T extends string>(input: T) {
    return changeCase.pathCase(input);
}

export function sentenceCase<T extends string>(input: T) {
    return changeCase.sentenceCase(input);
}

export function snakeCase<T extends string>(input: T) {
    return changeCase.snakeCase(input);
}

export function trainCase<T extends string>(input: T) {
    return changeCase.trainCase(input);
}
