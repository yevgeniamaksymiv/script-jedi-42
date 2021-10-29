//https://leetcode.com/problems/two-sum/
function twoSum(arrNums, target) {
  let numsObj = {};
  for (let i = 0; i < arrNums.length; i++) {
    let num = arrNums[i];
    numsObj[num] = i;
  }
  for (let i = 0; i < arrNums.length; i++) {
    let diff = target - arrNums[i];
    if (numsObj.hasOwnProperty(diff) && numsObj[diff] !== i) {
      return [i, numsObj[diff]];
    }
  }
}

