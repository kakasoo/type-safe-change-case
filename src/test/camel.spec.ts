import { describe, it } from 'node:test';
import assert from 'node:assert';
import { camelCase } from '../index';
import typia from 'typia';
import { CamelCase } from '../types/camel';

describe('camel case test', () => {
    describe('snake to camel', () => {
        it('handles empty string', () => {
            type A = CamelCase<''>;
            assert.equal(typia.random<ReturnType<typeof camelCase<''>>>(), '');
        });

        it('handles single-word string', () => {
            type A = CamelCase<'hello'>;
            assert.equal(typia.random<ReturnType<typeof camelCase<'hello'>>>(), 'hello');
        });

        it('handles string with single underscore', () => {
            type A = CamelCase<'hello_world'>;
            assert.equal(typia.random<ReturnType<typeof camelCase<'hello_world'>>>(), 'helloWorld');
        });
    });
});
