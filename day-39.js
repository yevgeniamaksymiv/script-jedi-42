//https://www.codewars.com/kata/5637ead70013386e30000027/
function* generator(a) {
  for (let i = 1; i < 100; i++) {
    yield `${a} x ${i} = ${a * i}`;
  }
}
