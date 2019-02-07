import {test} from 'tape';
import {anagram} from './anagram';

test('words sword', t => {
    const operations1 = anagram('rat', 'art');
let expected = true;
t.equal(expected, operations1)
t.end();
})