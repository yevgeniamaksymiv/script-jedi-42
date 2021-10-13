//https://www.codewars.com/kata/singleton-pattern/train/javascript
class Singleton {
  constructor() {
    return this.constructor.instance || (this.constructor.instance = this);
  }
}

//https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript
