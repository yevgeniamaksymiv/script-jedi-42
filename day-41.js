//https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
function queueTime(customers, n) {
  const arrTills = Array(n).fill(0);
  for (const i in customers) {
    let freeTill = arrTills.indexOf(Math.min(...arrTills));
    arrTills[freeTill] += customers[i];
  }
  return Math.max(...arrTills);
}

//https://www.codewars.com/kata/567ed5db4089538eea000010/train/javascript
function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => launchMissile(i), i * 1000);
  }
}
