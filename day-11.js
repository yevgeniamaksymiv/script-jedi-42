//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  if (s1.size === s2.size && [...s1].every((val) => s2.has(val))) return true;
  return false;
}
function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

//https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let s1 = new Set([...arr1]);
  for (let i = 0; i < arr2.length; i++){
    if (s1.has(arr2[i])) count1++;
    if (!s1.has(arr2[i])) count4++;
    }
  count2 = s1.size - count1 + count4;
  count3 = s1.size - count1;
  return [count1, count2, count3, count4];
}
