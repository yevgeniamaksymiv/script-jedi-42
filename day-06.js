//https://www.codewars.com/kata/maximum-multiple/train/javascript
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

//https://www.codewars.com/kata/is-he-gonna-survive/train/javascript
function hero(bullets, dragons) {
  return dragons * 2 <= bullets ? true : false;
}

//https://www.codewars.com/kata/59441520102eaa25260000bf
function unusualFive() {
  const arr = [, , , , , 'five'];
  for (let key in arr) return parseInt(key);
}
