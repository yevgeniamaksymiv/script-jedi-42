//http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function (This, ...args) {
  return this.apply(This, args);
};

//http://www.codewars.com/kata/anonymous-returns
const alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    const thisProp = this;
    return function () {
      return thisProp.name;
    };
  },
};
