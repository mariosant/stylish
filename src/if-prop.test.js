/* eslint-disable no-unused-expressions */

import {expect} from 'chai';
import ifProp from './if-prop';

const styleA = 'styleA';
const styleB = 'styleB';

describe('ifProp', () => {
	it('should return styleA when prop is truthy', () => {
		const fn = ifProp('test', styleA, styleB);

		expect(fn({test: true})).to.equal(styleA);
	});

	it('should return styleB when prop is falsy', () => {
		const fn = ifProp('test', styleA, styleB);

		expect(fn({test: false})).to.equal(styleB);
	});

	it('should return undefined when prop is falsy and alternative style is undefined', () => {
		const fn = ifProp('test', styleA);

		expect(fn({test: false})).to.be.undefined;
	});
});
