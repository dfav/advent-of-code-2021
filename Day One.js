// Go to your day 1 input page and run this in the console.

// Part 1
document.getElementsByTagName('pre')[0].innerHTML.split("\n").map((e) => parseInt(e)).reduce((s, c, i, a) => i > 0 && a[i - 1] < c ? s + 1 : s, 0)

// Part 2
var input = document.getElementsByTagName('pre')[0].innerHTML.split("\n").map((e) => parseInt(e));
input.reduce((s, c, i, a) => {
  var r = s;
  if (i > 2 && i + 1 < a.length) {
    var first = a.slice(i - 3, i);
    var fr = first.reduce((fs, fc) => fs + fc);
    var second = a.slice(i - 2, i + 1);
    var sr = second.reduce((ss, sc) => ss + sc);

    r = fr < sr ? s + 1 : s;
  }

  return r;
}, 0);
