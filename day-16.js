//http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  var sumArr = arr.slice();
  for (let i = arr.length - 1; i >= 0; i -= 3) {
    let sum = arr[i] + arr[i - 1] + arr[i - 2];
    sumArr.splice(i, 3, sum);
  }
  sumArr.splice(0, 2);
  return sumArr;
}

//http://www.codewars.com/kata/572df796914b5ba27c000c90

//http://www.codewars.com/kata/572fdeb4380bb703fc00002c
