//https://www.codewars.com/kata/basic-subclasses-adam-and-eve/
class God {
  static create() {
    const Adam = new Man();
    const Eve = new Woman();
    return [Adam, Eve];
  }
}
class Human {
  constructor(gender, name) {
    this.gender = gender;
    this.name = name;
  }
}
class Man extends Human {
  constructor(gender, name) {
    super(gender, name);
  }
}
class Woman extends Human {
  constructor(gender, name) {
    super(gender, name);
  }
}

//https://www.codewars.com/kata/56ff9b53140fcca90b000530/
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}

//https://www.codewars.com/kata/55a144eff5124e546400005a
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return this.personInfo();
  }
  personInfo() {
    return this.name + "s age is " + this.age;
  }
}

