// Calculating with Functions | 5kyu
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function getNum(num, o) {
  if (!o) return num;

  switch (o[0]) {
    case '+':
      return num + o[1];
    case '-':
      return num - o[1];
    case '*':
      return num * o[1];
    case '/':
      return Math.floor(num / o[1]);
  }
  return num;
}

function zero(o) { return getNum(0, o) }
function one(o) { return getNum(1, o) }
function two(o) { return getNum(2, o) }
function three(o) { return getNum(3, o) }
function four(o) { return getNum(4, o) }
function five(o) { return getNum(5, o) }
function six(o) { return getNum(6, o) }
function seven(o) { return getNum(7, o) }
function eight(o) { return getNum(8, o) }
function nine(o) { return getNum(9, o) }

function plus(num) { return ['+', num] }
function minus(num) { return ['-', num] }
function times(num) { return ['*', num] }
function dividedBy(num) { return ['/', num] }

console.log(one(plus(one())));
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(six(dividedBy(five())));
console.log(nine(dividedBy(five())));
