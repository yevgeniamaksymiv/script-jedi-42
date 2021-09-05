//https://www.codewars.com/kata/is-this-my-tail/train/javascript
function correctTail(body, tail) {
  return body[body.length - 1] === tail ? true : false;
}

//https://www.codewars.com/kata/56f6ad906b88de513f000d96
function bonusTime(salary, bonus) {
  return bonus === true ? '\u00A3' + salary * 10 : '\u00A3' + salary;
}

//https://www.codewars.com/kata/5a58d889880385c2f40000aa
function automorphic(n) {
  const autoNum = Math.pow(n, 2).toString();
  return +autoNum.slice(-n.toString().length) === n ? 'Automorphic' : 'Not!!';
}
