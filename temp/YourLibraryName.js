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

var main = 42;

return main;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWW91ckxpYnJhcnlOYW1lLmpzIiwic291cmNlcyI6WyIuLi9zcmMvbWF0aHMuanMiLCIuLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZ1bmN0aW9uIGlzbid0IHVzZWQgYW55d2hlcmUsIHNvXG4vLyBSb2xsdXAgZXhjbHVkZXMgaXQgZnJvbSB0aGUgYnVuZGxlLi4uXG5jb25zdCBQSSA9IDMuMTQ7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSAoIHggKSB7XG5cdHJldHVybiB4ICogeDtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGluY2x1ZGVkXG5leHBvcnQgZnVuY3Rpb24gY3ViZSAoIHggKSB7XG5cdC8vIHJld3JpdGUgdGhpcyBhcyBgc3F1YXJlKCB4ICkgKiB4YFxuXHQvLyBhbmQgc2VlIHdoYXQgaGFwcGVucyFcblx0cmV0dXJuIHggKiB4ICogeCAqIFBJO1xufVxuIiwiaW1wb3J0IHsgY3ViZSB9IGZyb20gJy4vbWF0aHMnO1xuXG5jb25zb2xlLmxvZyggYGN1YmU6ICR7Y3ViZSggNSApfWApOyAvLyAxMjVcblxuZXhwb3J0IGRlZmF1bHQgNDI7XG4iXSwibmFtZXMiOlsiUEkiLCJjdWJlIiwieCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssSUFBWDs7QUFHQTs7O0FBS0EsQUFBTyxTQUFTQyxJQUFULENBQWdCQyxDQUFoQixFQUFvQjs7O1FBR25CQSxJQUFJQSxDQUFKLEdBQVFBLENBQVIsR0FBWUYsRUFBbkI7OztBQ1hERyxRQUFRQyxHQUFSLFlBQXNCSCxLQUFNLENBQU4sQ0FBdEI7O0FBRUEsV0FBZSxFQUFmOzs7Ozs7OzsifQ==
