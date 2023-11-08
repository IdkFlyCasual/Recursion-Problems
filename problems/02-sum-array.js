/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:
sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

***********************************************************************/
function sumArray(arr) {
  arr[0] = arr[0] + arr[1]
  arr.splice(1, 1)
  if (arr.length > 1) {
    sumArray(arr)
  }
  return arr[0]
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
