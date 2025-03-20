const palindromes = function (str) {
	let punctuation = ["!", ":", ";", ",", ".", " "];

	let filteredArray = str
	  .split('')
	  .filter(item => !punctuation.includes(item))
	  .map(item => item.toLowerCase());

	let filteredString = filteredArray.join('');

	let reversedString = filteredArray.reverse().join('');

	return filteredString === reversedString;
};

console.log(palindromes("Racecar!!"));

// Do not edit below this line
module.exports = palindromes;
