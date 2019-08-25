import * as R from 'ramda';

const ifElse = R.curryN(2, (pred, styleA, styleB) =>
	R.ifElse(pred, () => styleA, () => styleB),
);

export default ifElse;
