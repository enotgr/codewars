// Directions Reduction | 5kyu
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
  const opposits = { 'NORTH': 'SOUTH', 'SOUTH': 'NORTH', 'EAST': 'WEST', 'WEST': 'EAST' };
  return arr.reduce((acc, curr) => {
    if (!acc.length) return [curr];

    if (curr === opposits[acc[acc.length-1]]) {
      acc.pop();
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);
}

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']));
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']));
