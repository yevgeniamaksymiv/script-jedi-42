//http://www.codewars.com/kata/573156709a231dcec9000ee8
function tailAndHead(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const x = arr[i].toString().split('').slice(-1);
    const y = arr[i + 1].toString().split('').slice(0, 1);
    newArr.push(parseInt(x) + parseInt(y));
  }
  return newArr.reduce((a, b) => a * b);
}

//http://www.codewars.com/kata/5732b0351eb838d03300101d

//https://www.codewars.com/kata/5735956413c2054a680009ec
