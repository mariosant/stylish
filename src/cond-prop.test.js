/* eslint-disable no-unused-expressions */

import {expect} from 'chai';
import condProp from './cond-prop';

const styleA = 'styleA';
const styleB = 'styleB';

describe('condProp', () => {
	it('should return style that honours the first legit condition', () => {
		const fn = condProp('color', [['blue', styleA], ['red', styleB]]);

		expect(fn({color: 'blue'})).to.equal(styleA);
		expect(fn({color: 'red'})).to.equal(styleB);
	});

	it('should return undefined if no conditions are matched', () => {
		const fn = condProp('data', [['a', styleA], ['b', styleB]]);

		expect(fn({data: 'c'})).to.be.undefined;
	});

	it('should be fine if prop is nil value', () => {
		const fn = condProp('data', [['a', styleA], ['b', styleB]]);

		expect(fn(null)).to.be.undefined;
		expect(fn()).to.be.undefined;
	});
});
