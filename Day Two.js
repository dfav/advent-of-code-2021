var input = document.getElementsByTagName('pre')[0].innerHTML.split("\n");
var v = 0;
var d = 0;
input.forEach((l) => {
  let [c, x] = l.split(' ');
  console.log(l, c, x);
  switch(c) {
    case 'forward':
      v += parseInt(x);
      break;
    case 'up':
      d -= parseInt(x);
      break;
    case 'down':
      d += parseInt(x);
      break;
  }
});

console.log(v, d, v * d);

// Part 2
var input = document.getElementsByTagName('pre')[0].innerHTML.split("\n");
var v = 0;
var d = 0;
var a = 0;
input.forEach((l) => {
  let [c, x] = l.split(' ');
  switch(c) {
    case 'forward':
      v += parseInt(x);
      d += a * parseInt(x);
      break;
    case 'up':
      a -= parseInt(x);
      break;
    case 'down':
      a += parseInt(x);
      break;
  }
});

console.log(v, d, v * d);
