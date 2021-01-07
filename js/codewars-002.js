// Array.diff | 6kyu
// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  // return a.filter(item => !b.includes(item)); // this solution is works as well

  const result = [];

  for (let itemA of a) {
    let flag = true;
    for (let itemB of b) {
      if (itemA === itemB) {
        flag = false;
        break;
      }
    }

    if (flag) {
      result.push(itemA);
    }
  }

  return result;
}

// const arr1 = [1, 34, 64, 2, 4, 3, 2, 3, 34];
// const arr2 = [1, 2, 3, 4];

// console.log(arrayDiff(arr1, arr2));