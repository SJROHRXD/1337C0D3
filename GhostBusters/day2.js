// DATE: 2 JAN 2023

// Given two strings s and t, determine if they are isomorphic.

// What is isomorphic? Define isomorphic: https://en.wikipedia.org/wiki/Isomorphism

// structure-preserving mapping between two structures of the same type that can be reversed by an inverse mapping
// word isomorphism is derived from the Ancient Greek: ἴσος isos "equal", and μορφή morphe "form" or "shape"
// interest in isomorphisms lies in the fact that two isomorphic objects have the same properties, but may be represented in different ways
// isomorphic structures cannot be distinguished from the point of view of structure only (i.e., they are isomorphic), but they can be distinguished from the point of view of their properties (i.e., they are not isomorphic)
// an automorphism is an isomorphism from a structure to itself

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// this works because the characters in s can be replaced to get t, and the order of characters is preserved

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// this doesn't work because the characters in s cannot be replaced to get t, and the order of characters is not preserved
/// one of the characters in s maps to two characters in t: "o" maps to "b" and "r"

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var s = "egg";
var t = "add";

function isIsomorphic(s, t) {
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++) {}
}

var isIsomorphic = function (s, t) {
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] === undefined) {
      sMap[s[i]] = t[i];
    } else if (sMap[s[i]] !== t[i]) {
      return false;
    }
    if (tMap[t[i]] === undefined) {
      tMap[t[i]] = s[i];
    } else if (tMap[t[i]] !== s[i]) {
      return false;
    }
  }

  return true;
};
