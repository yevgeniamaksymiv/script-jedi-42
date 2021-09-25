//http://www.codewars.com/kata/duplicate-arguments
function solution() {
  const nonDupl = new Set(arguments);
  return arguments.length > nonDupl.size ? true : false;
}

//http://www.codewars.com/kata/last
