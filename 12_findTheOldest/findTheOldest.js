const findTheOldest = function(list) {
  let oldest = {
  	name: undefined,
  	age: 0
  };
  for (let person of list) {
  	if (person.hasOwnProperty("yearOfDeath")) {
  	  person.age = person.yearOfDeath - person.yearOfBirth;
  	  console.log(`Person: ${person.name}. Age: ${person.age}`)
  	} else {
  	  let now = new Date();
  	  person.age =  now.getFullYear() - person.yearOfBirth;
  	}
  	if (person.age > oldest.age) {
      oldest = person;
  	}
  }
  return oldest; 
};

// Do not edit below this line
module.exports = findTheOldest;
