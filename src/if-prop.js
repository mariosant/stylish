import {prop} from 'ramda';
import ifElse from './if-else';

const ifProp = (propName, ...styles) => ifElse(prop(propName), ...styles);

export default ifProp;
