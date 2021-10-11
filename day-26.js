//http://www.codewars.com/kata/power-bind
Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    const rightCtx = this === global ? ctx : this;
    return func.apply(rightCtx, args);
  };
};

//https://www.codewars.com/kata/sort-with-arrow-functions
const OrderPeople = (people) => people.sort((a, b) => a.age - b.age);
