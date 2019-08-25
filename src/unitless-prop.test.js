import {expect} from 'chai';
import unitlessProp from './unitless-prop';

describe('unitlessProp', () => {
	it('should return return value in px by default', () => {
		const fn = unitlessProp('height');

		expect(fn({height: 2})).to.equal('2px');
	});

	it('should return value in whatever units defined', () => {
		const fn = unitlessProp('height', 'cm');

		expect(fn({height: 2})).to.equal('2cm');
	});

	it('should multiply with base', () => {
		const fn = unitlessProp('height', 'px', 4);

		expect(fn({height: 4})).to.equal('16px');
	});
});
