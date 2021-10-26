//https://www.codewars.com/kata/5637ead70013386e30000027/
function* generator(a) {
  let i = 1;
  while (true) {
    yield `${a} x ${i} = ${a * i}`;
    i++;
  }
}

