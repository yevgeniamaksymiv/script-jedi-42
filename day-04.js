//http://www.codewars.com/kata/57216d4bcdd71175d6000560
function padIt(str, n) {
  let newStr = str;
  let i = 0;
  while (i < n) {
    i % 2 === 0 ? (newStr = '*' + newStr) : (newStr = newStr + '*');
    i++;
  }
  return newStr;
}

//http://www.codewars.com/kata/5721a78c283129e416000999
function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 !== 0 ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd, even];
}

//http://www.codewars.com/kata/5721c189cdd71194c1000b9b
function grabDoll(dolls) {
  const bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === 'Hello Kitty') bag.push(dolls[i]);
    if (dolls[i] === 'Barbie doll') bag.push(dolls[i]);
    if (bag.length === 3) break;
    continue;
  }
  return bag;
}

//http://www.codewars.com/kata/5722b3f0bd5583cf44001000
function giveMeFive(obj) {
  const arrFive = [];
  for (const key in obj) {
    if (key.length === 5) arrFive.push(key);
    if (obj[key].length === 5) arrFive.push(obj[key]);
  }
  return arrFive;
}
