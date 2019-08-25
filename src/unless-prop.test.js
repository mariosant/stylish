/* eslint-disable no-unused-expressions	 */

import {expect} from 'chai';
import unlessProp from './unless-prop';

const styleA = 'styleA';
const styleB = 'styleB';

describe('unlessProp', () => {
	it('should return styleB when prop is truthy', () => {
		const fn = unlessProp('test', styleA, styleB);

		expect(fn({test: true})).to.equal(styleB);
	});

	it('should return styleA when prop is falsy', () => {
		const fn = unlessProp('test', styleA, styleB);

		expect(fn({test: false})).to.equal(styleA);
	});

	it('should return undefined when prop is truthy and alternative style is undefined', () => {
		const fn = unlessProp('test', styleA);

		expect(fn({test: true})).to.be.undefined;
	});
});
