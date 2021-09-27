//http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr) {
  const minStr = arr.reduce((a, b) => (a.length < b.length ? a : b));
  const newArr = arr.map((str) => str.substr(0, minStr.length));
  return newArr;
}

//http://www.codewars.com/kata/57277a31e5e51450a4000010
function firstToLast(str, c) {
  return str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.search(c);
}

//http://www.codewars.com/kata/57280481e8118511f7000ffa
function splitAndMerge(string, separator) {
  const sepStr = string
    .split(" ")
    .map((str) => str.split("").join(separator))
    .join(" ");
  return sepStr;
}

