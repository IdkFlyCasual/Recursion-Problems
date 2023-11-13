/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:
console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []

***********************************************************************/
function sort(nums, sorted = []) {
  if (nums.length === 0) {
    return sorted;
  }

  if (sorted.length === 0) {
    sorted.push(nums[0]);
  } else if (nums[0] >= sorted[sorted.length - 1]) {
    sorted.push(nums[0]);
  } else if (nums[0] <= sorted[0]) {
    sorted.unshift(nums[0]);
  } else {
    for (let i = 1; i < sorted.length; i++) {
      if (nums[0] <= sorted[i]) {
        sorted.splice(i, 0, nums[0]);
        break;
      }
    }
  }
  return sort(nums.slice(1), sorted);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
