//http://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  const gradeResult = {S: 0, A: 0, B: 0, C: 0, D: 0, X: 0};
  scores.filter(s => {
    if (s === 100) {
      gradeResult[`S`]++;
    }
    if (s < 100 && s >= 90) {
      gradeResult[`A`]++;
    }
    if (s < 90 && s >= 80) {
      gradeResult[`B`]++;
    }
    if (s < 80 && s >= 60) {
      gradeResult[`C`]++;
    }
    if (s < 60 && s >= 0) {
      gradeResult[`D`]++;
    }
    if (s === -1) {
      gradeResult[`X`]++;
    }
  });
  return gradeResult;
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
  const fromBiggest = [].concat(...arr);
  fromBiggest.sort((a, b) => {
    return b - a;
  });
  return fromBiggest.join('>');
}
