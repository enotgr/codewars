// Printer Errors | 7 kyu
// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  return (s.match(/[n-z]/g)||[]).length + '/' + s.length;

  // or

  const str = s.toUpperCase();
  let errorCount = 0;
  for (let i = 0; i < s.length; i++) {
    const code = str[i].charCodeAt();
    if (code > 77 || code < 65) {
      errorCount++;
    }
  }
  return errorCount + '/' + s.length;
}

// console.log(printerError('abcnop'));