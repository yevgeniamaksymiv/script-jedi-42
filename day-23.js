//http://www.codewars.com/kata/unpacking-arguments
function spread(func, args) {
  return func.apply(this, args);
}

//http://www.codewars.com/kata/for-the-sake-of-argument
const numbers = (...num) => num.every((el) => typeof el === "number");
