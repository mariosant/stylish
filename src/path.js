import {path, split} from 'ramda';

export default (pathName = '') => (props = {}) =>
	path(split('.', pathName), props);
