import {identity, ifElse, isNil, pipe, propEq} from 'ramda';
import cond from './cond';

const condProp = (prop, conditions = []) =>
	pipe(
		ifElse(isNil, () => ({}), identity),
		cond(conditions.map(([value, style]) => [propEq(prop, value), style])),
	);

export default condProp;
