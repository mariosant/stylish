/* eslint-disable no-unused-expressions */

import {expect} from 'chai';
import * as R from 'ramda';
import ifElse from './if-else';

const styleA = 'styleA';
const styleB = 'styleB';

describe('ifElse', () => {
	it('should return styleA when predicate function returns true', () => {
		const fn = ifElse(R.T, styleA, styleB);

		expect(fn({})).to.equal(styleA);
	});

	it('should return styleB when predicate function returns false', () => {
		const fn = ifElse(R.F, styleA, styleB);

		expect(fn({})).to.equal(styleB);
	});

	it('should return undefined when predicate function is falsy and alternative style is undefined', () => {
		const fn = ifElse(R.F, styleA);

		expect(fn({test: false})).to.be.undefined;
	});
});
