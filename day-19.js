//http://www.codewars.com/kata/5735e39313c205fe39001173
function countAnimals(animals, count) {
  const res = [];
  for (const anim of count) {
    const newAn = animals.split(anim).length - 1;
    res.push(newAn);
  }
  return res;
}

//http://www.codewars.com/kata/573975d3ac3eec695b0013e0
function findSimilarity(str,word){
 const newStr = str.split(' ')
      .filter(x => x.length === word.length)
      .join(' ');
  return newStr.split(' ')
      .filter(x => x[0] === word[0] && x.slice(-1) === word.slice(-1))
      .join(' ');
}
