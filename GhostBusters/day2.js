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

// THIS IS A COPILOT SOLUTION🐇

// HERE IS THE CHATGPT EXPLANATION:

// This code defines a function isIsomorphic which takes in two strings s and t and returns a boolean indicating whether or not the two strings are isomorphic.

// An isomorphism is a bijective map between two sets. In this case, the sets are the characters of the two strings and the map is defined such that each character in the first string corresponds to a unique character in the second string and vice versa.

// BIJECTIVE MAP🐇

// In mathematics, a bijective map (also known as a bijection) is a function that is both injective and surjective.

// An injective function is a function that preserves distinctness: it never maps distinct input elements to the same output element. In other words, if f(a) = f(b) then a = b.

// A surjective function is a function that is onto: for every element in the range (output) of the function, there exists an element in the domain (input) of the function such that the function maps it to the element in the range.

// A bijective function is a function that is both injective and surjective. This means that it maps each element in the domain to a unique element in the range and that every element in the range has a corresponding element in the domain.

// In the context of the isIsomorphic function, the term "bijective map" refers to the isomorphism mapping between the characters of the two strings. The function checks that this mapping is bijective, which means that each character in the first string corresponds to a unique character in the second string and vice versa.

// INJECTIVE and SURJECTIVE🐇

// In mathematics, a function is called injective (also known as one-to-one) if it preserves distinctness: it never maps distinct input elements to the same output element. In other words, if f(a) = f(b) then a = b.

// For example, the function f(x) = x^2 is injective because it maps distinct input elements to distinct output elements. For instance, f(2) = 4 and f(3) = 9, so f(2) ≠ f(3).

// On the other hand, the function g(x) = x is not injective because it maps both 1 and -1 to the same output element 1.

// A function is called surjective (also known as onto) if every element in the range (output) of the function has a corresponding element in the domain (input) of the function such that the function maps it to the element in the range.

// For example, the function f(x) = x^2 is surjective because for every element y in the range of f, there exists an element x in the domain of f such that f(x) = y. For instance, f(-1) = 1 and f(1) = 1.

// On the other hand, the function g(x) = x^2 + 1 is not surjective because it does not map any element in its domain to the element 0 in its range.

// A function that is both injective and surjective is called bijective (also known as a bijection). A bijective function establishes a one-to-one correspondence between the elements in its domain and range.

// END NOTES🐇

// The function starts by declaring two empty objects sMap and tMap. These objects will be used to store the isomorphism mapping between the characters of s and t.

// NOTE ON USING OBJECTS TO STORE MAPPINGS🐇

// The two empty objects sMap and tMap are used to store the isomorphism mapping between the characters of the two strings. The purpose of these objects is to allow the function to quickly check whether a character has already been encountered before and, if it has, to check that it is mapped to the correct character in the other string.

// The function uses the objects in the following way:

// When a character s[i] is encountered for the first time, it is added to sMap as a key with a value of t[i]. This stores the isomorphism mapping between s[i] and t[i].

// If s[i] is encountered again later on, the function looks up the value of s[i] in sMap. If the value is not equal to t[i], the function returns false since this indicates that the isomorphism is no longer bijective (one-to-one).

// The function does the same for tMap, which stores the isomorphism mapping between the characters of t.

// By using these objects, the function is able to efficiently check whether the characters of the two strings are isomorphic in linear time.

// It then enters a loop that iterates through each character in s. For each character s[i], the function checks if it has already been encountered before. If it has not been encountered before, it adds an entry to sMap that maps s[i] to t[i]. If it has been encountered before, it checks that the character in t mapped to by s[i] is indeed t[i]. If this is not the case, the function returns false since the isomorphism mapping is no longer bijective.

// The function then does the same for tMap, which maps characters in t to characters in s. If any characters in t do not have a unique corresponding character in s, the function returns false.

// If the loop completes without returning false, the function returns true since this indicates that the characters of s and t are isomorphic.
