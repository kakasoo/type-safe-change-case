import { describe, it } from 'node:test';
import assert from 'node:assert';
import { camelCase } from '../index';
import typia from 'typia';
import { CamelCase } from '../types/camel';

describe('camel case test', () => {
    describe('snake to camel', () => {
        it('handles empty string', () => {
            type Answer = CamelCase<''>;
            assert.equal(typia.random<Answer>(), '');
            assert.equal(typia.random<ReturnType<typeof camelCase<''>>>(), '');
        });

        it('handles single-word string', () => {
            type Answer = CamelCase<'hello'>;
            assert.equal(typia.random<Answer>(), 'hello');
            assert.equal(typia.random<ReturnType<typeof camelCase<'hello'>>>(), 'hello');
        });

        it('handles string with single underscore', () => {
            type Answer = CamelCase<'hello_world'>;
            assert.equal(typia.random<Answer>(), 'helloWorld');
            assert.equal(typia.random<ReturnType<typeof camelCase<'hello_world'>>>(), 'helloWorld');
        });
    });

    describe('pascal to camel', () => {
        it('converts Pascal case to camel case', () => {
            type Answer = CamelCase<'ThisIsAnExample'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'ThisIsAnExample'>>>(), 'thisIsAnExample');
        });
    });
});
