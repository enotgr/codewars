// Replace With Alphabet Position | 6kyu
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  return text
    .toLowerCase().split('')
    .filter(char => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
    .map(char => char.charCodeAt(0) - 96).join(' ');
}

// console.log(alphabetPosition('abcz,./'));