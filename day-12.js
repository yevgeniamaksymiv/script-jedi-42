//https://www.codewars.com/kata/59859f435f5d18ede7000050
function wordToBin(str) {
  const array = str
    .split('')
    .map((char) => '0' + char.charCodeAt(0).toString(2).slice(-8))
    .join(' ');
  return array.split(' ');
}

//https://www.codewars.com/kata/57f75cc397d62fc93d000059
function calc(x) {
  const total1 = x
    .split('')
    .map((char) => char.charCodeAt())
    .join('');
  const total2 = total1.replace(/['7']/g, '1');
  const digitSum1 = total1.split('');
  const sum1 = digitSum1.reduce((a, b) => Number(a) + Number(b));
  const digitSum2 = total2.split('');
  const sum2 = digitSum2.reduce((c, d) => Number(c) + Number(d));
  return sum1 - sum2;
}
