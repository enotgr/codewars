// Human readable duration format | 4kyu
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (seconds) {
  if (!seconds) {
    return 'now';
  }

  const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
  const res = [];

  for (let key in time) {
    if (seconds >= time[key]) {
      let val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0];
}

// console.log(formatDuration(3600));