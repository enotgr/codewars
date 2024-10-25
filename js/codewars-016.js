// Snail Sort | 4kyu
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

function snail(array) {
  let result = [];
  let n = array.length;

  if (n === 0 || array[0].length === 0) return result;

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = bottom;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(array[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      left++;
    }
  }

  return result;
}

const a = snail([
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25],
]);

console.log(a);
