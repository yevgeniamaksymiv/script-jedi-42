//http://www.codewars.com/kata/this-is-a-problem
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
  return this.name;
}

//https://www.codewars.com/kata/this-is-an-other-problem
class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    const regex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
    if (regex.test(value)) [this.firstName, this.lastName] = value.split(" ");
  }
}
