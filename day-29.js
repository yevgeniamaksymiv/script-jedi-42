//https://www.codewars.com/kata/how-new-works
const myObj = Object.create(MyObject.prototype);
MyObject.call(myObj);

//http://www.codewars.com/kata/replicate-new
function nouveau(Constructor, ...args) {
  const person = Object.create(Constructor.prototype);
  const constructorResult = Constructor.apply(person, args);
  if (
    typeof constructorResult === "function" ||
    (typeof constructorResult === "object" && constructorResult !== null)
  )
    return constructorResult;
  return person;
}
