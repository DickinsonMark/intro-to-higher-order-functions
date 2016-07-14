// #1.

console.log('Running any expecting: true!');
console.log(any([8,9,10,11], greaterThan10));

// #2.

// console.log('Running surprise()() expecting: surprise!');
// console.log(suprise()());
//
// // #3.
//
// console.log('Running filter expecting: [1, 3]');
// console.log(filter([1, 2, 3, 4], onlyOdd));
//
// // #4.
//
// console.log('Running sumTwoNumbers(3)(9) expecting: 12');
// console.log(sumTwoNumbers(3)(9));

// #1.

function any(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array);
  }
  return result
}

function greaterThan10(test){
  var result = (test > 10)
  
};


// #2.
function
