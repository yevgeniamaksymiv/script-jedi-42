//https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes
Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";

//https://www.codewars.com/kata/javascript-class-like-objects
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  get animalInfo() {
    return this.toString();
  }
  toString() {
    return this.name + " is a " + this.type;
  }
}
