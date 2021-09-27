//http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n) {
  const num = Number(n);
  if (num === Number.MAX_VALUE) return 'Input number is Number.MAX_VALUE';
  else if (num === Number.MIN_VALUE) return 'Input number is Number.MIN_VALUE';
  else if (isNaN(num)) return 'Input number is Number.NaN';
  else if (num === Number.NEGATIVE_INFINITY)
    return 'Input number is Number.NEGATIVE_INFINITY';
  else if (num === Number.POSITIVE_INFINITY)
    return 'Input number is Number.POSITIVE_INFINITY';
  else return 'Input number is ' + num;
}

//https://www.codewars.com/kata/57238ceaef9008adc7000603
function colorOf(r, g, b) {
  return (
    '#' +
    r.toString(16).padStart(2, 0) +
    g.toString(16).padStart(2, 0) +
    b.toString(16).padStart(2, 0)
  );
}

//http://www.codewars.com/kata/57256064856584bc47000611
function howManySmaller(arr, n) {
  const count = arr.filter((el) => parseFloat(el.toFixed(2)) < n).length;
  return count;
}

