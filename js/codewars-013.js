// Counting Duplicates | 6kyu
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  const res = text.toLowerCase().split('').reduce((acc, x) => {
    if (Object.keys(acc).includes(x)) {
      acc[x] += 1;
    } else {
      acc[x] = 0;
    }
    return acc;
  }, {})
  return Object.keys(res).filter(key => res[key]).length;
}

// console.log(duplicateCount('aaBccdEee'));
