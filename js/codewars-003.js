// Find The Parity Outlier | 6kyu
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers){
  const startNums = integers.slice(0, 3);
  let evenCount = 0;
  let oddCount = 0;

  for (let num of startNums) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const isEven = evenCount > oddCount;

  for (let num of integers) {
    const numIsEven = num % 2 === 0;
    if (isEven && !numIsEven) {
      return num;
    } else if (!isEven && numIsEven) {
      return num;
    }
  }
}

// console.log(findOutlier([1, 2, 3, 5]));
// console.log(findOutlier([2, 3, 4, 6]));