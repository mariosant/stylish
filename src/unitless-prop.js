import {pipe, prop} from 'ramda';

const unitlessProp = (propName, unit = 'px', base = 1) =>
	pipe(
		prop(propName),
		v => v * base + unit,
	);

export default unitlessProp;
