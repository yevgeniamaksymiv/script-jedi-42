//https://www.codewars.com/kata/array-number-reduce/train/javascript

//https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056
Object.deepFreeze = function (object) {
  const propNames = Object.getOwnPropertyNames(object);
  propNames.forEach(function (name) {
    const prop = object[name];
    if (typeof prop === "object" && prop !== null) Object.deepFreeze(prop);
  });
  return Object.freeze(object);
};
