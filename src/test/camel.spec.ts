import { describe, it } from 'node:test';
import assert from 'node:assert';
import { camelCase } from '../index';
import typia from 'typia';
import { CamelCase } from '../types/camel';

describe('camelCase test', () => {
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

    describe('capital case to camelCase', () => {
        it('converts Capital Case to camelCase', async () => {
            type Answer = CamelCase<'This Is An Example'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'This Is An Example'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('This Is An Example'), 'thisIsAnExample');
        });
    });

    describe('snake case to camelCase', () => {
        it('handles string with single underscore', async () => {
            type Answer = CamelCase<'hello_world'>;
            assert.equal(typia.random<Answer>(), 'helloWorld');
            assert.equal(typia.random<ReturnType<typeof camelCase<'hello_world'>>>(), 'helloWorld');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('hello_world'), 'helloWorld');
        });
    });

    describe('pascal case to camelCase', () => {
        it('converts Pascal case to camelCase', async () => {
            type Answer = CamelCase<'ThisIsAnExample'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'ThisIsAnExample'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('ThisIsAnExample'), 'thisIsAnExample');
        });
    });

    describe('constant case to camelCase', () => {
        it('converts CONSTANT_CASE to camelCase', async () => {
            type Answer = CamelCase<'THIS_IS_AN_EXAMPLE'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'THIS_IS_AN_EXAMPLE'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('THIS_IS_AN_EXAMPLE'), 'thisIsAnExample');
        });

        it('converts CONSTANT_CASE to camelCase', async () => {
            type Answer = CamelCase<'this_is_an_example'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'this_is_an_example'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('this_is_an_example'), 'thisIsAnExample');
        });
    });

    describe('dto case to camelCase', () => {
        it('convert dot.case to camelCase', async () => {
            type Answer = CamelCase<'this.is.an.example'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'this.is.an.example'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('this.is.an.example'), 'thisIsAnExample');
        });

        it('convert dot.case to camelCase', async () => {
            type Answer = CamelCase<'THIS.IS.AN.EXAMPLE'>;
            assert.equal(typia.random<Answer>(), 'thisIsAnExample');
            assert.equal(typia.random<ReturnType<typeof camelCase<'THIS.IS.AN.EXAMPLE'>>>(), 'thisIsAnExample');

            const changeCase = await eval('import("change-case")');
            assert.equal(changeCase.camelCase('THIS.IS.AN.EXAMPLE'), 'thisIsAnExample');
        });
    });
});
