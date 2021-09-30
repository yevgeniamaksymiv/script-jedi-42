//http://www.codewars.com/kata/a-function-within-a-function
function always(n) {
  return function () {
    return n;
  };
}

//https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript
function solution(arr, options) {
  const state = {
    modifier: 2,
  };
  const newArr = arr.map((el) => el + 2 * options.modifier);
  return newArr;
}
