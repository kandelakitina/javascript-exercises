const sumAll = function(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  if (min < 0 || 
  	  Math.round(a) != a || 
  	  Math.round(b) != b || 
  	  typeof a !== "number" || 
  	  typeof b !== "number") {
  	return "ERROR";
  } 

  // let sum = 0;
  // for (let i = min; i <= max; i++) {
  //   sum += i;
  // }
  // return sum;


  // Calculate the sum using the arithmetic series formula
  return ((max - min + 1) * (min + max)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
