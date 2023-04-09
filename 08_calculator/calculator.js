const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sumTotal, arr) => {
    return sumTotal + arr;
  }, 0);
};

const multiply = function(array) {
  if(array.length === 0) return 0;
  return array.reduce((multiplyTotal, arr) => {
    return multiplyTotal * arr;
  }, 1);
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(num) {
  let fact = 1;
	for (let i = 1; i <= num ; i++){
    fact *= i;
  }
  return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
