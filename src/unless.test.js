/* eslint-disable no-unused-expressions */

import {expect} from 'chai';
import * as R from 'ramda';
import unless from './unless';

const styleA = 'styleA';
const styleB = 'styleB';

describe('unless', () => {
	it('should return styleB when predicate function is truthy', () => {
		const fn = unless(R.T, styleA, styleB);

		expect(fn({test: true})).to.equal(styleB);
	});

	it('should return styleA when predicate function is falsy', () => {
		const fn = unless(R.F, styleA, styleB);

		expect(fn({test: false})).to.equal(styleA);
	});

	it('should return undefined when predicate function is truthy and alternative style is undefined', () => {
		const fn = unless(R.T, styleA);

		expect(fn({test: false})).to.be.undefined;
	});
});
