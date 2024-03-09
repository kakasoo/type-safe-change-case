import { describe, it } from 'node:test';
import assert from 'node:assert';
import { camelCase } from '../index';
import typia from 'typia';
import { CamelCase } from '../types/camel';

describe('camel case test', () => {
    it('handles empty string', async () => {
        type Answer = CamelCase<''>;
        assert.equal(typia.random<Answer>(), '');
        assert.equal(typia.random<ReturnType<typeof camelCase<''>>>(), '');

        const changeCase = await eval('import("change-case")');
        assert.equal(changeCase.camelCase(''), '');
    });

    it('handles single-word string', async () => {
        type Answer = CamelCase<'hello'>;
        assert.equal(typia.random<Answer>(), 'hello');
        assert.equal(typia.random<ReturnType<typeof camelCase<'hello'>>>(), 'hello');

        const changeCase = await eval('import("change-case")');
        assert.equal(changeCase.camelCase('hello'), 'hello');
    });

    describe('capital case to camel case', () => {
        it('converts Capital Case to camel case', async () => {
            type Answer = CamelCase<'This Is An Example'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'This Is An Example'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('This Is An Example'), 'thisIsAnExample');
        });
    });

    describe('snake case to camel case', () => {
        it('handles string with single underscore', async () => {
            type Answer = CamelCase<'hello_world'>;
            assert.equal(typia.random<Answer>(), 'helloWorld');
            assert.equal(typia.random<ReturnType<typeof camelCase<'hello_world'>>>(), 'helloWorld');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('hello_world'), 'helloWorld');
        });
    });

    describe('pascal case to camel case', () => {
        it('converts Pascal case to camel case', async () => {
            type Answer = CamelCase<'ThisIsAnExample'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'ThisIsAnExample'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('ThisIsAnExample'), 'thisIsAnExample');
        });
    });

    describe('constant case to camel case', () => {
        it('converts CONSTANT_CASE to camel case', async () => {
            type Answer = CamelCase<'THIS_IS_AN_EXAMPLE'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'THIS_IS_AN_EXAMPLE'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('THIS_IS_AN_EXAMPLE'), 'thisIsAnExample');
        });
    });
});
