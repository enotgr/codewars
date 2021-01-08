// Sum of pairs | 5kyu
// https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(ints, s) {
  let prev;
  for (let i = 0; i < ints.length; i++) {
    if (prev && prev === ints[i]) {
      continue;
    }
    prev = ints[i];
    const rest = ints.slice(0, i);
    const index = rest.indexOf(s - ints[i]);
    if (index !== -1) {
      return [rest[index], ints[i]];
    }
  }
}

// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));