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
function sortIt(arr) {
  const newArr = arr.slice();
  newArr.sort((a, b) => {
    const count1 = arr.filter((value) => value === a).length;
    const count2 = arr.filter((value) => value === b).length;
    if (count1 === count2) return b - a;
    return count1 > count2 ? 1 : -1;
  });
  return newArr;
}


//http://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr) {
  let newArr = arr.map((x, i) => {
    if (arr[i].length % 2 === 0) {
      return (
        x.slice(0, Math.floor(arr[i].length / 2)) +
        '|' +
        x.slice(Math.floor(arr[i].length / 2))
      );
    } else
      return (
        x.slice(0, Math.floor(arr[i].length / 2)) +
        '|' +
        x.slice(Math.floor(arr[i].length / 2) + 1)
      );
  });
  return newArr;
}
