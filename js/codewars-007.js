// Christmas tree | 6kyu
// https://www.codewars.com/kata/52755006cc238fcae70000ed

function christmasTree(height) {
  const strLength = (height - 1) * 2 + 1;
  let result = [];
  for (let i = 0; i < height; i++) {
    const starCount = i * 2 + 1;
    const padCount = ((strLength - starCount) / 2).toFixed();
    const starStr = '*'.repeat(starCount);
    const spaceStr = ' '.repeat(padCount);
    result.push(spaceStr + starStr.padStart() + spaceStr);
  }
  return result.join('\n');
}

// console.log(christmasTree(50));