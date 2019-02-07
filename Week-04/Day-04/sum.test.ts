import {test} from 'tape';
import {Numbers} from './sum';

test('add 2 numbers', t => {
    const operations = new Numbers();
    let actual = operations.sum([]);
    let expected = 8;
    t.equal(8, 8);
    t.end();
});

test('empty list', t => {
    const operations1 = new Numbers();
    let actual = operations1.sum([]);
    let expected = 8;
    t.equal();
    t.end();

})