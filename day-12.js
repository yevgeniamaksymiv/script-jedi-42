//https://www.codewars.com/kata/59859f435f5d18ede7000050
function wordToBin(str) {
  const array = str
    .split('')
    .map((char) => '0' + char.charCodeAt(0).toString(2).slice(-8))
    .join(' ');
  return array.split(' ');
}

//https://www.codewars.com/kata/57f75cc397d62fc93d000059
