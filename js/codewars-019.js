// Rot13 | 5kyu
// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  let res = '';
  for (const ch of message) {
    if (/[a-zA-Z]/.test(ch)) {
      const code = ch.charCodeAt();
      res += String.fromCharCode(
        code + (code > 109 || (code > 77 && code < 97) ? -13 : 13),
      );
    } else {
      res += ch;
    }
  }
  return res;
}

console.log(rot13('abc lmn z 1 ABC LMN Z'));
console.log(rot13('8*|'));
console.log('|'.charCodeAt());
// console.log('a'.charCodeAt(), 'z'.charCodeAt());
// console.log('A'.charCodeAt(), 'Z'.charCodeAt());
