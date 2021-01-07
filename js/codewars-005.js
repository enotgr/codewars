// Descending Order | 7kyu
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(num) {
  return +num.toString().split('').sort((a, b) => b - a).join('');
}

// console.log(descendingOrder(2461));