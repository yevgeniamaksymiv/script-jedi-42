//http://www.codewars.com/kata/573e6831e3201f6a9b000971
const regex = /\b(\w?)(\w?)(\w)\w?\3\2\1\b/g;

//http://www.codewars.com/kata/573fb9223f9793e485000453
const regex = /\d{3}(?!$)/g;
function addCommas(money, reg) {
  if (money.length === 4) return money;
  const num = money
    .split("")
    .reverse()
    .join("")
    .replace(reg, (x) => x + ",")
    .split("")
    .reverse();
  for (let i = 0; i < 5; i++) {
    if (num[1] === ",") num.splice(1, 1);
  }
  return num.join("");
}
