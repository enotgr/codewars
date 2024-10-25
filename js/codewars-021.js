// Pete, the baker | 5kyu
// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
  return Object.keys(recipe).reduce((acc, key) => {
    if (!available[key]) return 0;
    const count = Math.floor(available[key] / recipe[key]);
    if (acc === null) return count;
    return count < acc ? count : acc;
  }, null);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
