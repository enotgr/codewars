// First non-repeating character | 5kyu
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(str) {
  for (const letter of str.split('')) {
    if (str.toLowerCase().split(letter.toLowerCase()).length === 2) return letter;
  }
  return '';
}

console.log(firstNonRepeatingLetter('wrgojnwrgonwrg'));
console.log(firstNonRepeatingLetter('sTreSS'));
