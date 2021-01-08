// Valid Parentheses | 5 kyu
// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens){
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ')') {
      if (!count) {
        return false;
      }
      count--;
    } else if (parens[i] === '(') {
      count++;
    }
  }
  return !count;
}

// console.log(validParentheses('(())(())'));