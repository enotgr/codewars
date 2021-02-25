// Multiples of 3 or 5 | 6kyu
// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 && i % 5) {
      continue;
    }
    sum += i;
  }

  return sum;

  // or

  if (number < 0) {
    return 0;
  }

  return [...Array(number)]
    .map((_, i) => i)
    .filter((num) => !(num % 3) || !(num % 5))
    .reduce((acc, num) => acc + num, 0);
}

// console.log(solution(10));
