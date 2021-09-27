//http://www.codewars.com/kata/write-javascripts-call-function-using-apply


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
