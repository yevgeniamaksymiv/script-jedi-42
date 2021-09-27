//http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map((word) => word.slice(0, -1) + word[word.length - 1].toLowerCase())
    .join(" ");
}

//http://www.codewars.com/kata/57284d23e81185ae6200162a
function topSecret(str) {
  const char = str.split("");
  for (let i = 0; i < char.length; i++) {
    if (
      char[i].charCodeAt() < 65 ||
      (char[i].charCodeAt() > 90 && char[i].charCodeAt() < 97) ||
      char[i].charCodeAt() > 122
    )
      continue;
    if (char[i] === "A") char[i] = "X";
    else if (char[i] === "B") char[i] = "Y";
    else if (char[i] === "C") char[i] = "Z";
    else if (char[i] === "a") char[i] = "x";
    else if (char[i] === "b") char[i] = "y";
    else if (char[i] === "c") char[i] = "z";
    else char[i] = String.fromCharCode(char[i].charCodeAt() - 3);
  }
  return char.join("");
}

//http://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s) {
  const s1 = s.trim();
  return `${s1}\n${s1.repeat(2)}\n${s1.repeat(3)}\n${s1.repeat(4)}\n${s1.repeat(5)}`;
}

