// DATE: 1 JAN 2023

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// NOTES:
// prefix sum
// what is a prefix sum?
// prefix sum is the sum of all the elements in the array up to that index
// "up to that index" means that the prefix sum includes the element at that index
// index is defined as the position of an element in an array

// https://dev.to/seanpgallivan/solution-running-sum-of-1d-array-34na#idea
// While this is not a terribly challenging problem, it's a good introduction to the concept of a prefix sum array. Prefix sum arrays have many uses in more complex algorithms and can sometimes help reduce the time complexity of a advanced solution by an order of magnitude.

// In a prefix sum array, we will create a duplicate array which contains the running sum of the elements 0 to i of our original array (nums) for each index i of our prefix sum array (ans). (Note: We can lower the space complexity by using an in-place approach with nums directly and mutating it into its own prefix sum array, if there is no compelling reason to avoid modifying a function argument.)

// Since we'll need to build on a previous running total, we should start our iteration at i = 1 and copy over the first element from nums to ans. Then we just iterate through nums and add each element (nums[i]) to the previous running total (ans[i-1]) to create the new running total (ans[i]).

// When we're done, we can return ans.

// Time Complexity: O(N) where N is the length of nums
// Space Complexity: O(N) for our running sum array
// or O(1) with an in-place approach
nums = [1, 2, 3, 4];

var runningSum = function (nums) {
  let ans = new Array(nums.length);
  ans[0] = nums[0];
  for (let i = 1; i < nums.length; i++) ans[i] = ans[i - 1] + nums[i];
  return ans;
};

console.log(runningSum(nums));

// runningSum is a function that takes in an array of numbers

// ans is a new array that is the same length as nums

// ans[0] is the first element of nums

// nums[0] is the first element of nums

// ans[0] = nums[0] tells us that the first element of ans is the first element of nums

// the for loop starts at 1 because we already know the first element of ans

// the for loop ends at nums.length because we want to iterate through all the elements of nums

// let i = 1; i < nums.length; i++ tells us that we want to iterate through all the elements of nums, i=1 means we start at the second element of nums, i<nums.length means we stop at the last element of nums, i++ means we iterate through the elements of nums one at a time

// why do we start at 1 and not 0? "because we already know the first element of ans and we don't want to overwrite it"

// what if we didn't specify ana[0] = nums[0]? "we would get an error because we would be trying to access an element of ans that doesn't exist"

// ans[i] = ans[i-1] + nums[i] tells us that the current element of ans is the previous element of ans plus the current element of nums

// when the function runs, the first element in nums is 1, so the first element in ans is 1; 1 will not be overwritten because we specified ans[0] = nums[0]

// when the function runs, the second element in nums is 2, so the second element in ans is 1 + 2 = 3

// when the function runs, the third element in nums is 3, so the third element in ans is 3 + 3 = 6

// when the function runs, the fourth element in nums is 4, so the fourth element in ans is 6 + 4 = 10

// when the function runs, the fifth element in nums is undefined, so the fifth element in ans is 10 + undefined = NaN; the function stops running because i<nums.length is false

// when the function stops running, ans is [1, 3, 6, 10]

/// console.log(runningSum(nums)) tells us that the function runningSum is called with nums as an argument

// OTHER SOLUTIONS:
// var runningSum = function (nums) {
//   nums.reduce((a, c, i, arr) => (arr[i] += a));
//   return nums;
// };

// The nums array is defined as [1, 2, 3, 4].

// The runningSum function takes an array as an argument and returns that array with its elements modified.

// The nums array is passed to the reduce method, which iterates over the array and applies a callback function to each element. This callback function takes four arguments:

// a: the accumulated value, which starts at the first element of the array
// c: the current element being processed
// i: the index of the current element
// arr: the array being processed
// The callback function for the reduce method in this case is an arrow function with an implicit return statement. The function adds the accumulated value (a) to the current element (c) and assigns the result to the element at the current index (i) in the array (arr).

// Finally, the modified nums array is returned by the runningSum function.

// So when the code is run, the runningSum function will return a new array [1, 3, 6, 10], which is the original array with each element replaced by the running sum of the elements up to that point.

// var runningSum = function (nums) {
//   let currentSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     currentSum += nums[i];
//     nums[i] = currentSum;
//   }
//   return nums;
// };

// The nums array is defined as [1, 2, 3, 4].

// The runningSum function takes an array as an argument and returns that array with its elements modified.

// Inside the function, a local variable currentSum is defined and initialized to 0.

// A for loop is then used to iterate over the elements of the nums array. The loop will continue as long as i is less than the length of the array. i is the loop counter variable, which is initialized to 0 and incremented by 1 at the end of each iteration.

// Inside the loop, the value of currentSum is increased by the value of the element at the current index (nums[i]). The element at the current index is then replaced by the value of currentSum.

// Finally, the modified nums array is returned by the runningSum function.

// So when the code is run, the runningSum function will return a new array [1, 3, 6, 10], which is the original array with each element replaced by the running sum of the elements up to that point.

// LEETCODE MARKDOWN TEMPLATE:
// # Intuition
// <!-- Describe your first thoughts on how to solve this problem. -->

// # Approach
// <!-- Describe your approach to solving the problem. -->

// # Complexity
// - Time complexity:
// <!-- Add your time complexity here, e.g. $$O(n)$$ -->

// - Space complexity:
// <!-- Add your space complexity here, e.g. $$O(n)$$ -->

// OFFICIAL SOLUTION:

// https://leetcode.com/problems/running-sum-of-1d-array/solutions/1136761/running-sum-of-1d-array/
