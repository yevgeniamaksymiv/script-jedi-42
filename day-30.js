//http://www.codewars.com/kata/santaclausable-interface
function isSantaClausable(obj) {
  return (
    typeof obj.sayHoHoHo === "function" &&
    typeof obj.distributeGifts === "function" &&
    typeof obj.goDownTheChimney === "function"
  );
}

//http://www.codewars.com/kata/cylon-evolution
class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return "Destroy all humans!";
  }
}
class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
  }
  infiltrate() {
    return "Infiltrate the colonies";
  }
}
