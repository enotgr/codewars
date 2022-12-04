// Lottery Ticket | 6kyu
// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win) {
  let res = 0;
  for (let item of ticket) {
    for (let s of item[0].split('')) {
      if (s.charCodeAt() === item[1]) {
        res++;
        break;
      }
    }
  }
  return res >= win ? 'Winner!' : 'Loser!';
}

// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
// console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));
// console.log(bingo([['KIIDOAG', 72], ['GN', 78]], 1));
