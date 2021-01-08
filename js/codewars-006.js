// Even Binary Sorting | 6kyu
// https://www.codewars.com/kata/582bbdbcc190132e3e0001f3

function evenBinary(n) {
  const evenNums = [];
  let result = n.split(' ').map(x => {
    if (x % 10 === 0) {
      evenNums.push(x);
      return;
    }
    return x;
  });
  evenNums.sort();
  let i = 0;
  return result = result.map(x => {
    if (!x) {
      return evenNums[i++];
    }
    return x;
  }).join(' ');
}

// console.log(evenBinary('101 111 100 001 010'));