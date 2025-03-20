const fibonacci = function(n, memo = {}) {
	if (+n < 0) return "OOPS";
	if (+n == 0) return 0;
	if (+n <= 1) return +n;
	let a = 0, b = 1;
	for (let i = 2; i <= +n; i++) {
	    [a, b] = [b, a + b];
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
