// Next bigger number with the same digits | 4kyu
// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n) {
  const digs = `${n}`.split('').map(Number);
  let i;
  for (i = digs.length - 2; i >= 0; i--) {
    if (digs[i] < digs[i + 1]) {
      break;
    }
  }
  if (i < 0) return -1;

  let j = digs.length - 1;
  while (digs[j] <= digs[i]) {
    j--;
  }

  [digs[i], digs[j]] = [digs[j], digs[i]];

  const rightPart = digs.splice(i + 1).sort((a, b) => a - b);
  return +digs.concat(rightPart).join('');
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(9));
console.log(nextBigger(111));
console.log(nextBigger(531));
