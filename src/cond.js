import {cond as rcond, map} from 'ramda';

const styleToFn = ([predFn, style]) => [predFn, () => style];

const cond = (conditions = []) => rcond(map(styleToFn, conditions));

export default cond;
