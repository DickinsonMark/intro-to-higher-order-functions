// #1.

console.log('Running any expecting: true!');
console.log(any([8,9,10,11], greaterThan10));

// #2.

console.log('Running surprise()() expecting: surprise!');
console.log(surprise()());

// #3.

console.log('Running filter expecting: [1, 3]');
console.log(filter([1, 2, 3, 4], onlyOdd));

// #4.

console.log('Running sumTwoNumbers(3)(9) expecting: 12');
console.log(sumTwoNumbers(3)(9));

// #1.    Invocation:	any([ 8, 9, 10, 11 ], greaterThan10)  Output: true  Hint: greaterThan10 is a callback

function any(array, callback) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    };
  };
  return false;
};

function greaterThan10(test){
  return (test > 10);
};


// #2.    Invocation: surprise()()  Output: 'surprise!'	Hint: Return a function

function surprise() {
  return function exclamationFN() {
        return 'surprise!';
    };
};

//  #3.   Invocation:  filter([ 1, 2, 3, 4 ], onlyOdd)  Output:  [ 1, 3 ]  Hint:  onlyOdd is a callback

function filter(arr, callback) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  };
  return newArr;
};

function onlyOdd(num) {
  return (num % 2 !== 0);
}

//  #4.   Invocation:  sumTwoNumbers(3)(9)	Output:  12  Hint: Return a function

function sumTwoNumbers(num1) {
  return function addition(num2) {
    return num1 + num2
  };
};
