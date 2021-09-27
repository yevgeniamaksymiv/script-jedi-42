//http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function (a, ...args) {
  return this.apply(a, args);
};

//http://www.codewars.com/kata/anonymous-returns
name = 'The Window';

const alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return function() {
            return alpha.name;
        };
    }
};
