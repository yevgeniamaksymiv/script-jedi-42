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
function blackAndWhite(arr){
  if (Array.isArray(arr) === false) return "It's a fake array";
  const newArr = new Set([...arr]);
  if (newArr.has(5) && newArr.has(13)) return "It's a black array";
  if (!newArr.has(5) || !newArr.has(13)) return "It's a white array";
}

//https://www.codewars.com/kata/5735956413c2054a680009ec
function rndCode() {
  const ltr = 'ABCDEFGHIJKLM';
  const num = '1234567890';
  const sym = '~!@#$%^&*';
  let code1 = '';
  let code2 = '';
  let code3 = '';
  for (let i = 0; i < 2; i++)
    code1 += ltr.charAt(~~(Math.random() * ltr.length));
  for (let i = 0; i < 4; i++)
    code2 += num.charAt(~~(Math.random() * num.length));
  for (let i = 0; i < 2; i++)
    code3 += sym.charAt(~~(Math.random() * sym.length));
  return code1 + code2 + code3;
}

