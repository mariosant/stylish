/* eslint-disable no-unused-expressions */

import {expect} from 'chai';
import * as R from 'ramda';
import * as stylish from '.';

const exportedFns = [
	'cond',
	'condProp',
	'ifElse',
	'ifProp',
	'unitlessProp',
	'unless',
	'unlessProp',
	'path',
	'pathOr',
];

const exportTestIterate = fn =>
	it(`should export ${fn}`, () => {
		expect(stylish[fn]).to.be.ok;
	});

describe('index', () => {
	R.forEach(exportTestIterate, exportedFns);
});
