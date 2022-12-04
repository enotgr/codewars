
// Simple Fun #79: Delete a Digit | 6kyu
// https://www.codewars.com/kata/5894318275f2c75695000146

function deleteDigit(n) {
  let max = 0;
  for (let i = 0; i < String(n).length; i++) {
    const newNum = +(String(n).substring(0, i) + String(n).substring(i + 1, String(n).length));
    if (max < newNum) {
      max = newNum;
    }
  }
  return max;
}

// console.log(deleteDigit(1001));
