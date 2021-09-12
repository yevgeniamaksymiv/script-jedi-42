//http://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  var obj = {S: 0, A: 0, B: 0, C: 0, D: 0, X: 0};
  scores.filter(s => {
    if (s === 100) {
      obj[`S`]++;
    }
    if (s < 100 && s >= 90) {
      obj[`A`]++;
    }
    if (s < 90 && s >= 80) {
      obj[`B`]++;
    }
    if (s < 80 && s >= 60) {
      obj[`C`]++;
    }
    if (s < 60 && s >= 0) {
      obj[`D`]++;
    }
    if (s === -1) {
      obj[`X`]++;
    }
  });
  return obj;
}

//http://www.codewars.com/kata/57308546bd9f0987c2000d07
function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i].toString().split('').reverse().join('') === arr[i + 1].toString()
    ) {
      return [arr[i], arr[i + 1]];
    }
  }
  return [-1, -1];
}

//http://www.codewars.com/kata/5731861d05d14d6f50000626
function bigToSmall(arr) {
  const newArr = [].concat(...arr);
  newArr.sort((a, b) => {
    return b - a;
  });
  return newArr.join('>');
}
