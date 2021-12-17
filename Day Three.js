var input = document.getElementsByTagName('pre')[0].innerHTML.split('\n');

var off = Array(input[0].length).fill(0);
var on = Array(input[0].length).fill(0);
var gamma = Array(input[0].length).fill(0);
var epsilon = Array(input[0].length).fill(0);

input.forEach((l) => {
  for (var i = 0; i < l.length; i++) {
    if (l[i] === '1') {
      on[i]++;
    } else {
      off[i]++;
    }
  }
});

for (var i = 0; i < gamma.length; i++) {
  gamma[i] = +(off[i] < on[i]);
  epsilon[i] = +(off[i] > on[i]);
}

console.log(parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2));

// Part 2

var input = document.getElementsByTagName('pre')[0].innerHTML.split('\n').map((l) => l.split(''));
var oxygen = [...input];
var oxygenRating = [];
var scrubber = [...input];
var scrubberRating = [];

for (var p = 0; p < input[0].length; p++) {
  let off = oxygen.filter((l) => l[p] === '0');
  let on = oxygen.filter((l) => l[p] === '1');

  console.log('OFF', off.length,'ON', on.length);

  if (off.length <= on.length) {
    oxygenRating.push(1);
    oxygen = [...on];
  } else {
    oxygenRating.push(0);
    oxygen = [...off];
  }

  if (oxygen.length <= 1) break;
}

console.log(oxygen, oxygenRating.join(''), parseInt(oxygenRating.join(''), 2));

for (var p = 0; p < input[0].length; p++) {
  let off = scrubber.filter((l) => l[p] === '0');
  let on = scrubber.filter((l) => l[p] === '1');
  
  console.log('OFF', off.length,'ON', on.length);

  if (off.length <= on.length) {
    scrubberRating.push(0);
    scrubber = [...off];
  } else {
    scrubberRating.push(1);
    scrubber = [...on];
  }

  if (scrubber.length <= 1) {
    scrubberRating = scrubber[0].map((x) => parseInt(x))
  break;
  }
}

console.log(scrubber, scrubberRating.join(''), parseInt(scrubberRating.join(''), 2));

console.log('FINAl ANSWER: ', parseInt(oxygenRating.join(''), 2) * parseInt(scrubberRating.join(''), 2));
