/* eslint-disable no-unused-expressions */

import {expect} from 'chai';
import * as R from 'ramda';
import cond from './cond';

const styleA = 'styleA';
const styleB = 'styleB';

describe('cond', () => {
	it('should return style that honours the first legit condition', () => {
		const fn = cond([[R.F, styleA], [R.T, styleB], [R.T, styleA]]);

		expect(fn()).to.equal(styleB);
	});

	it('should return undefined if no conditions are matched', () => {
		const fn = cond([[R.F, styleA], [R.F, styleB]]);

		expect(fn()).to.be.undefined;
	});

	it('should pass props to predicate functions', () => {
		const props = {color: 'blue'};

		const fn = cond([[p => expect(p).to.equal(props), styleA]]);

		fn(props);
	});
});
