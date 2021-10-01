//http://www.codewars.com/kata/duplicate-arguments
function solution() {
  const nonDupl = new Set(arguments);
  return arguments.length > nonDupl.size ? true : false;
}

//http://www.codewars.com/kata/last
function last(list) {
  const arg = [...arguments];
  if (Array.isArray(list) === true) return list.pop();
  if (typeof list === "string")
    return arg[arg.length - 1][arg[arg.length - 1].length - 1];
  if (typeof list !== "string" || Array.isArray(list) === false)
    return arg[arg.length - 1];
}
