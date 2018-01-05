/*!
 * YourLibraryName.js v1.0.0
 * (c) 2017-2018 Leo Hui <leohxj@gmail.com>
 * Released under the MIT License.
 */
// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
var PI = 3.14;



// This function gets included
function cube(x) {
	// rewrite this as `square( x ) * x`
	// and see what happens!
	return x * x * x * PI;
}

console.log('cube: ' + cube(5)); // 125

function foo(x) {
  if (x) {
    return x;
  }
  return 'default string';
}

console.log('foo:', foo(22));

var main = 42;

export default main;
