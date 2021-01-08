// Calculate Variance | 5kyu
// https://www.codewars.com/kata/5266fba01283974e720000fa

function variance(numbers) {
  const mean = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
  return numbers
    .map(num => Math.pow(num - mean, 2))
    .reduce((acc, num) => acc + num, 0) / numbers.length;
}

// console.log(variance([1, 2, 2, 3]));