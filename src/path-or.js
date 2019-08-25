import {pathOr, split} from 'ramda';

export default (defValue, pathName = '') => (props = {}) =>
	pathOr(defValue, split('.', pathName), props);
