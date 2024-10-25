// Weight for weight | 5kyu
// https://www.codewars.com/kata/55c6126177c9441a570000cc

function orderWeight(strng) {
  return strng
    .trim()
    .split(' ')
    .filter(x => x && x !== ' ')
    .sort((prev, curr) => {
      const a = prev.split('').reduce((acc, n) => acc + +n, 0);
      const b = curr.split('').reduce((acc, n) => acc + +n, 0);
      return a === b ? prev.localeCompare(curr) : a - b;
    }).join(' ');
}

console.log(orderWeight('56 65 74 100 99 68 86 180 90'));
