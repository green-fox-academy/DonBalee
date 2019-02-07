import {test} from 'tape';
import {Apples} from './apples'

test('az lesz ami van', t => {
    const operation = new Apples();
    let actual = operation.getApple();
    let expected = 'apple';
    t.equal(actual, expected);
    t.end();
});