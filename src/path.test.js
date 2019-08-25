/* eslint-disable no-unused-expressions */

import {expect} from 'chai';
import path from './path';

describe('path', () => {
	it('should return value at specific, dot-notated path', () => {
		const fn = path('theme.color');

		expect(fn({theme: {color: 'white'}})).to.equal('white');
	});

	it('should return undefined if path not found', () => {
		const fn = path('nope');

		expect(fn({})).to.be.undefined;
	});

	it('should be fine with nil props', () => {
		const fn = path('nope');

		expect(fn()).to.be.undefined;
		expect(fn(null)).to.be.undefined;
	});
});
