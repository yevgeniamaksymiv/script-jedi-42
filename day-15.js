//http://www.codewars.com/kata/572ab0cfa3af384df7000ff8
function shuffleIt(arr, ...xArr) {
  for (let i = 0; i < xArr.length; i++) {
    const [a, b] = [xArr[i][0], xArr[i][1]];
    [arr[b], arr[a]] = [arr[a], arr[b]];
  }
  return arr;
}

//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/
function loopArr(arr, direction, steps) {
  if (direction === 'left') {
    const arr1 = arr.splice(0, steps);
    return [...arr, ...arr1];
  } else {
    const arr2 = arr.splice(-steps);
    return [...arr2, ...arr];
  }
}

//http://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arr, d, n) {
  for (let i = 1; i <= n; i++) {
    if (d === 'left') {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    } else {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
}
