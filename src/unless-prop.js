import {prop} from 'ramda';
import unless from './unless';

const unlessProp = (propName, ...styles) => unless(prop(propName), ...styles);

export default unlessProp;
