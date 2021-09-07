http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  str = str.toUpperCase().split(' ');
  return str
    .map((word) => word.slice(0, -1) + word[word.length - 1].toLowerCase())
    .join(' ');
}

//http://www.codewars.com/kata/57284d23e81185ae6200162a


//http://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}
