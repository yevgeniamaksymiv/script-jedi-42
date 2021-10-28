//https://www.codewars.com/kata/singleton-pattern/train/javascript
class Singleton {
  constructor() {
    return this.constructor.instance || (this.constructor.instance = this);
  }
}

//https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript
class Router {
  constructor() {
    this.routes = {};
  }
  bind(address, method, action) {
    if (!this.routes[address]) {
      this.routes[address] = {};
    }
    this.routes[address][method] = action;
  }
  runRequest(address, method) {
    if (this.routes[address] && this.routes[address][method]) {
      return this.routes[address][method].call();
    } else return "Error 404: Not Found";
  }
}
