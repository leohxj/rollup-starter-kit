/* @flow */
import { cube } from './maths';

console.log(`cube: ${cube(5)}`); // 125

function foo(x: ?string): string {
  if (x) {
    return x;
  }
  return 'default string';
}

console.log('foo:', foo(22));

export default 42;
