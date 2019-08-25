import {complement} from 'ramda';
import ifElse from './if-else';

const unless = (pred, ...styles) => ifElse(complement(pred), ...styles);

export default unless;
