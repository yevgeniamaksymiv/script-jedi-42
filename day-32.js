//http://www.codewars.com/kata/this-is-a-problem
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
  return this.name;
}

//https://www.codewars.com/kata/this-is-an-other-problem
