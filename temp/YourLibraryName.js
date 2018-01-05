(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.YourLibraryName = factory());
}(this, (function () { 'use strict';

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

return main;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWW91ckxpYnJhcnlOYW1lLmpzIiwic291cmNlcyI6WyIuLi9zcmMvbWF0aHMuanMiLCIuLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZ1bmN0aW9uIGlzbid0IHVzZWQgYW55d2hlcmUsIHNvXG4vLyBSb2xsdXAgZXhjbHVkZXMgaXQgZnJvbSB0aGUgYnVuZGxlLi4uXG5jb25zdCBQSSA9IDMuMTQ7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSAoIHggKSB7XG5cdHJldHVybiB4ICogeDtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGluY2x1ZGVkXG5leHBvcnQgZnVuY3Rpb24gY3ViZSAoIHggKSB7XG5cdC8vIHJld3JpdGUgdGhpcyBhcyBgc3F1YXJlKCB4ICkgKiB4YFxuXHQvLyBhbmQgc2VlIHdoYXQgaGFwcGVucyFcblx0cmV0dXJuIHggKiB4ICogeCAqIFBJO1xufVxuIiwiLyogQGZsb3cgKi9cbmltcG9ydCB7IGN1YmUgfSBmcm9tICcuL21hdGhzJztcblxuY29uc29sZS5sb2coIGBjdWJlOiAke2N1YmUoIDUgKX1gKTsgLy8gMTI1XG5cbmZ1bmN0aW9uIGZvbyh4OiA/c3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICByZXR1cm4gJ2RlZmF1bHQgc3RyaW5nJztcbn1cblxuY29uc29sZS5sb2coJ2ZvbzonLCBmb28oMjIpKTtcblxuZXhwb3J0IGRlZmF1bHQgNDI7XG4iXSwibmFtZXMiOlsiUEkiLCJjdWJlIiwieCIsImNvbnNvbGUiLCJsb2ciLCJmb28iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssSUFBWDs7QUFHQTs7O0FBS0EsQUFBTyxTQUFTQyxJQUFULENBQWdCQyxDQUFoQixFQUFvQjs7O1FBR25CQSxJQUFJQSxDQUFKLEdBQVFBLENBQVIsR0FBWUYsRUFBbkI7OztBQ1ZERyxRQUFRQyxHQUFSLFlBQXNCSCxLQUFNLENBQU4sQ0FBdEI7O0FBRUEsU0FBU0ksR0FBVCxDQUFhSCxDQUFiLEVBQWlDO01BQzNCQSxDQUFKLEVBQU87V0FDRUEsQ0FBUDs7U0FFSyxnQkFBUDs7O0FBR0ZDLFFBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CQyxJQUFJLEVBQUosQ0FBcEI7O0FBRUEsV0FBZSxFQUFmOzs7Ozs7OzsifQ==
