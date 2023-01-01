// DATE: 1 JAN 2023
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

// index [3] is where the sum of the left side is equal to the sum of the right side

// we need to select each index, and then sum the left side and the right side
// we need to compare the left side to the right side
// if they are equal, return the index
// stop when we find the first index that is equal

function pivotIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = nums.slice(0, i);
    let right = nums.slice(i + 1);
    let leftSum = left.reduce((a, b) => a + b, 0);
    let rightSum = right.reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

// we return -1 if we don't find a pivot index

// var pivotIndex = function(nums) {
//     let leftSum = 0
//     let rightSum = nums.reduce((a, b) => a + b,0)  - nums[0]
//     if(!rightSum) return 0
//     for(let i = 1;i<nums.length;i++){
//            leftSum += nums[i-1]
//         rightSum -= nums[i]
//         if(leftSum == rightSum){
//             return i
//         }
//     }
//     return -1
// };

// var pivotIndex = function(nums) {
//     total = nums.reduce((acc, item) => acc += item, 0);
//   let leftSum = 0;

//   for (let i = 0; i < nums.length; i++){
//     rightSum = total - nums[i] - leftSum
//     if (leftSum == rightSum)
//       return i
//     leftSum += nums[i]
//   }
//   return -1
// };

// var pivotIndex = function(nums) {
//     const total = nums.reduce((acc,val)=>acc+val);
//     let ls = 0;
//     for ( let [i,num] of Object.entries(nums)){
//         if( ls === total-ls-num)
//             return i;
//         ls += num;
//         }
//     return -1

// };

// var pivotIndex = function(nums) {
//     let sum = nums.reduce((a,b)=>a+b, 0);
//     let sumL = 0, sumR = sum;
//     for(let i=0, len=nums.length; i<len; i++){
//         sumR -= nums[i];
//     	if(sumL === sumR) return i;
//     	sumL += nums[i];
//     }
//     return -1;
// };

// https://leetcode.com/problems/find-pivot-index/solutions/127676/find-pivot-index/?envType=study-plan&id=level-1
