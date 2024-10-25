// Extract the domain name from a URL | 5kyu
// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
  return url.replace(/^(https?:\/\/)?(www\.)?([^\.\/]+).*$/i, '$3');
  // return url.substring(url.indexOf('://') + 3, url.lastIndexOf('.')).replace('www.', '');
  // return url.replace('://www.', '://').split('://')[1].split('.')[0];
}

console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));
console.log(domainName('http://google.com'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('https://youtube.com'));
