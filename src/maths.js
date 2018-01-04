// This function isn't used anywhere, so
// Rollup excludes it from the bundle...
const PI = 3.14;


export function square ( x ) {
	return x * x;
}

// This function gets included
export function cube ( x ) {
	// rewrite this as `square( x ) * x`
	// and see what happens!
	return x * x * x * PI;
}
