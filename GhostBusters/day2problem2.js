// DATE: 2 JAN 2023

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// SUBSEQUENCE:

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

// Using ChatGPT to generate code for this problem:

s = "abc";
t = "ahbgdc";

function isSubsequence(s, t) {
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++;
    }
    if (j === s.length) {
      return true;
    }
  }
  return false;
}

// so this did not work
// what if the strings are empty?

// "if both of the strings are empty and the expected output is "true", this solution returns "false".. can we correct that?"

// You are correct that the current solution will return false if both s and t are empty. To correct this, we can add a special case to handle the empty strings at the beginning of the function. Here is the modified solution:

function isSubsequence(s, t) {
  if (s.length === 0) {
    return true;
  }
  if (t.length === 0) {
    return false;
  }
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++;
    }
    if (j === s.length) {
      return true;
    }
  }
  return false;
}

// Now, if both s and t are empty, the function will return true. If only s is empty, the function will return true because an empty string is a subsequence of any string. If only t is empty, the function will return false because it is not possible for s to be a subsequence of an empty string.

// this worked!

// "I think this solution is correct, but I'm not sure if it is the most efficient solution. Can you think of a more efficient solution?" *COPILOT SUGGESTS A MORE EFFICIENT SOLUTION TO CHATGPT*

// ChatGPT: "Yes, there is a more efficient solution that has a time complexity of O(m + n), where m is the length of s and n is the length of t. This solution uses a pointer to iterate through s and a hash map to store the positions of each character in t."

function isSubsequence(s, t) {
  if (s.length === 0) {
    return true;
  }
  if (t.length === 0) {
    return false;
  }

  let positions = new Map();
  for (let i = 0; i < t.length; i++) {
    if (!positions.has(t[i])) {
      positions.set(t[i], []);
    }
    positions.get(t[i]).push(i);
  }

  let prev = -1;
  for (let i = 0; i < s.length; i++) {
    if (!positions.has(s[i])) {
      return false;
    }
    let j = positions.get(s[i]).findIndex((x) => x > prev);
    if (j === -1) {
      return false;
    }
    prev = positions.get(s[i])[j];
  }

  return true;
}

// To understand how this solution works, let's consider the example s = "abc" and t = "ahbgdc".

// The loop initializes the positions map and iterates through the characters of t. It adds an entry to the map for each character in t and stores an array of its positions in the string. For example, positions.get("a") is [0], positions.get("b") is [2], and so on.
// The loop initializes the variable prev to -1 and iterates through the characters of s. It uses the findIndex method to find the first position of s[i] in t that is greater than prev. If no such position exists, the function returns false. Otherwise, it updates prev to the found position.
// If the loop completes without returning false, the function returns true since this indicates that s is a subsequence of t.

// This solution has a time complexity of O(m + n) because it iterates through s and t once. The space complexity is O(n), since it uses a hash map to store the positions of each character in t.

// well it took longer to run, but that's okay

// THE LEETCODE PROVIDED SOLUTION:

var isSubsequence = function (s, t) {
  let b = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[b] === t[i]) {
      b++;
    }
  }

  return b === s.length;
};

// This code defines a function isSubsequence which takes in two strings s and t and returns a boolean indicating whether or not s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.

// The function uses a variable b to keep track of the current position in s and iterates through the characters of t. For each character t[i], it checks if it is equal to the current character in s, which is s[b]. If it is equal, it increments b to move to the next character in s.

// Finally, the function returns true if b is equal to the length of s, and false otherwise. This is because if b is equal to the length of s, it means that all the characters in s have been found in t in the correct order, so s is a subsequence of t. If b is less than the length of s, it means that not all the characters in s have been found, so s is not a subsequence of t.
