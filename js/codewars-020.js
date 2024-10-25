// The Hashtag Generator | 5kyu
// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  const title = str.split(' ').filter(x => x && x !== ' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join('');
  return title && title.length < 140 ? `#${title}` : false;
}

console.log(generateHashtag(' Hello world'));
