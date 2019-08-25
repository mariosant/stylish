import {expect} from 'chai';
import pathOr from './path-or';

describe('pathOr', () => {
	it('should return value at specific, dot-notated path', () => {
		const fn = pathOr(null, 'theme.color');

		expect(fn({theme: {color: 'white'}})).to.equal('white');
	});

	it('should return default value if path not found', () => {
		const fn = pathOr(true, 'nope');

		expect(fn({})).to.equal(true);
	});

	it('should be fine with nil props', () => {
		const fn = pathOr(true, 'nope');

		expect(fn()).to.equal(true);
		expect(fn(null)).to.equal(true);
	});
});
